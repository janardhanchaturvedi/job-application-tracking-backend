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
        statusCode: StatusCodes.OK
      });
    }

    return applications;
  } catch (error) {
    console.log('🚀 ~ getChannelByIdService ~ error:', error);
    throw error;
  }
};

export const createApplicationService = async (applicationData) => {
  try {
    const application = await applicationRepository.create(applicationData);
    if (!application) {
      throw new clientError({
        explanation: 'Invalid data sent from client',
        message: 'Something went wrong while creating application',
        statusCode: StatusCodes.OK
      });
    }
    return application;
  } catch (error) {
    console.log('🚀 createApplicationService ~ error:', error);
    throw error;
  }
};

export const updateApplicationService = async (
  applicationId,
  applicationData
) => {
  try {
    const application = await applicationRepository.update(
      applicationId,
      applicationData
    );
    if (!application) {
      throw new clientError({
        explanation: 'Invalid data sent from client',
        message: 'Something went wrong while updating application',
        statusCode: StatusCodes.OK
      });
    }
    return application;
  } catch (error) {
    console.log('🚀 updateApplicationService ~ error:', error);
    throw error;
  }
};

export const deleteApplicationService = async (applicationId) => {
  try {
    const application = await applicationRepository.delete(applicationId);
    if (!application) {
      throw new clientError({
        explanation: 'Invalid data sent from client',
        message: 'Something went wrong while deleting application',
        statusCode: StatusCodes.OK
      });
    }
    return application;
  } catch (error) {
    console.log('🚀 deleteApplicationService ~ error:', error);
    throw error;
  }
};
