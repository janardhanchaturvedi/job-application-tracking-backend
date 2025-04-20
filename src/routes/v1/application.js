import express from 'express';

import { getApplicationByIdController } from '../../controllers/jobApplication.js';
import { isAuthenticated } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:channelId', isAuthenticated, getApplicationByIdController);

export default router;
