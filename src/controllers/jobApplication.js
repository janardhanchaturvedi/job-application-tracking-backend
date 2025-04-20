import { StatusCodes } from 'http-status-codes';

import { getApplicationByIdService } from '../service/applicationService.js';
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
