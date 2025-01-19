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

      const { data, error, message, status } = successRequest({
        status: mongooseStatus,
        connection: {
          database: mongooseStatus === 'healthy' ? 'connected' : 'disconnected',
        },
      });

      return res.status(status).json({
        error,
        message,
        data,
      });
  } catch (err) {
    const { data, error, message, status } = internalServerError(err.message);
    return res.status(status).json({
      error,
      message,
      data,
    });
  }
});

export default router;
