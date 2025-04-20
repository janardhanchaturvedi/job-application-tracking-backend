import Application from '../schema/jobApplication.js';
import crudRespository from './crudRepository.js';

const applicationRepository = {
  ...crudRespository(Application),
  getByUserId: async (userId, page = 0, limit = 10, search) => {
    const skip = page * limit;
    const [applications, applicationsCount] = await Promise.all([
      Application.find({
        userId: userId,
        ...(search &&
          search !== '' && {
            $or: [
              { jobTitle: { $regex: search, $options: 'i' } },
              { company: { $regex: search, $options: 'i' } },
              { status: { $regex: search, $options: 'i' } },
              { notes: { $regex: search, $options: 'i' } }
            ]
          })
      })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate('userId', 'username email'),
      Application.countDocuments({
        userId: userId
      })
    ]);
    return {
      applications,
      totalPages: Math.ceil(applicationsCount / limit),
      currentPage: page,
      totalApplications: applicationsCount
    };
  }
};

export default applicationRepository;
