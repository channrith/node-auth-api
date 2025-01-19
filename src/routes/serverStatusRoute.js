import express from 'express';
import mongoose from 'mongoose';
import { successRequest, internalServerError } from '../util';

const router = express.Router();

router.get('/status', async (_, res) => {
  try {
    // mongoose state:
    // 0: disconnected, 1: connected, 2: connecting, 3: disconnecting
    const mongooseStatus =
      mongoose.connection.readyState === 1 ? 'healthy' : 'unhealthy';

    return successRequest(res, {
      status: mongooseStatus,
      connection: {
        database: mongooseStatus === 'healthy' ? 'connected' : 'disconnected',
      },
    });
  } catch (error) {
    return internalServerError(res, 'Database connection failed');
  }
});

export default router;
