import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    applicationDate: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: [
        'Applied',
        'Interview Scheduled',
        'Offered',
        'Rejected',
        'Withdrawn'
      ],
      default: 'Applied'
    },
    jobLink: {
      type: String,
      required: true
    },
    notes: {
      type: String
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Replace 'User' with the name of the related model
      required: true
    }
  },
  { timestamps: true }
);

const Application = mongoose.model('Application', applicationSchema);

export default Application;
