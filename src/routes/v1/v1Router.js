import express from 'express';

import applicationRouter from './application.js';
import userRouter from './user.js';
const router = express.Router();

router.use('/users', userRouter);
router.use('/jobs', applicationRouter);

export default router;
