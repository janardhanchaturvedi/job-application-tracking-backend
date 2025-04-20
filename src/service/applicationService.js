import { StatusCodes } from 'http-status-codes';

import applicationRepository from '../repository/applicationRepository.js';
import clientError from '../utils/errors/clientError.js';

export const getApplicationByIdService = async (
  userId,
  page,
  limit,
  search
) => {
  try {
    const applications = await applicationRepository.getByUserId(
      userId,
      page,
      limit,
      search
    );

    if (!applications) {
      throw new clientError({
        explanation: 'Invalid data sent from client',
        message: 'Job Applications not found with provided ID',
        statusCode: StatusCodes.NOT_FOUND
      });
    }

    return applications;
  } catch (error) {
    console.log('🚀 ~ getChannelByIdService ~ error:', error);
    throw error;
  }
};
