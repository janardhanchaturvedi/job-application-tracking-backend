import { StatusCodes } from 'http-status-codes';

import {
  createApplicationService,
  deleteApplicationService,
  getApplicationByIdService,
  getApplicationDetailsService,
  updateApplicationService
} from '../service/applicationService.js';
import {
  customErrorResponse,
  internalServerError,
  sucessResponse
} from '../utils/common/responseObjects.js';

export const getApplicationByIdController = async (req, res) => {
  try {
    const response = await getApplicationByIdService(
      req.user,
      req.query.page,
      req.query.limit,
      req.query.search
    );
    return res
      .status(StatusCodes.OK)
      .json(sucessResponse(response, 'Application fectched successfully'));
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalServerError(error));
  }
};

export const createApplicationController = async (req, res) => {
  try {
    const response = await createApplicationService({
      ...req.body,
      userId: req.user
    });
    return res
      .status(StatusCodes.CREATED)
      .json(sucessResponse(response, 'Application created successfully'));
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalServerError(error));
  }
};
export const updateApplicationController = async (req, res) => {
  try {
    const response = await updateApplicationService(
      req.params.applicationId,
      req.body
    );
    return res
      .status(StatusCodes.OK)
      .json(sucessResponse(response, 'Application updated successfully'));
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalServerError(error));
  }
};

export const deleteApplicationController = async (req, res) => {
  try {
    const response = await deleteApplicationService(req.params.applicationId);
    return res
      .status(StatusCodes.OK)
      .json(sucessResponse(response, 'Application deleted successfully'));
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalServerError(error));
  }
};

export const getApplicationDetailsController = async (req, res) => {
  try {
    const response = await getApplicationDetailsService(
      req.params.applicationId,
      req.user
    );
    return res
      .status(StatusCodes.OK)
      .json(
        sucessResponse(response, 'Application details fetched successfully')
      );
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalServerError(error));
  }
};
