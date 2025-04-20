import express from 'express';

import {
  createApplicationController,
  getApplicationByIdController
} from '../../controllers/jobApplication.js';
import { isAuthenticated } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', isAuthenticated, getApplicationByIdController);
router.put('/:applicationId', isAuthenticated, createApplicationController);
router.post('/', isAuthenticated, createApplicationController);
router.delete('/:applicationId', isAuthenticated, createApplicationController);
export default router;
