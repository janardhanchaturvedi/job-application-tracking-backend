import express from 'express';

import {
  createApplicationController,
  deleteApplicationController,
  getApplicationByIdController
} from '../../controllers/jobApplication.js';
import { isAuthenticated } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', isAuthenticated, getApplicationByIdController);
router.put('/:applicationId', isAuthenticated, createApplicationController);
router.post('/', isAuthenticated, createApplicationController);
router.delete('/:applicationId', isAuthenticated, deleteApplicationController);
export default router;
