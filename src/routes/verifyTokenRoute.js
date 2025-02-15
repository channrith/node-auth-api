import express from 'express';
import expressJwt from 'express-jwt';
import { ENV, HTTP_STATUS_CODE } from '../constant';
import { unauthorizedRequest } from '../util';

const router = express.Router();

router.post(
  '/verify-token',
  expressJwt({
    secret: ENV.JWT_SECRET,
    algorithms: ['HS256'],
    requestProperty: 'auth', // Attach the payload to req.auth
    getToken: (req) => {
      // Extract the token from the request body
      if (req.body && req.body.token) {
        return req.body.token;
      }
      return null; // Return null if no token is found
    },
  }),
  (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      // Custom error response for invalid or missing token
      const { data, error, message, status } = unauthorizedRequest(
        'Invalid or missing token. Please provide a valid token.'
      );
      return res.status(status).json({
        error,
        message,
        data,
      });
    }
    // Pass other errors to the default error handler
    next(err);
  },
  async (req, res) => {
    const data = {
      userId: req.auth._id,
      iat: req.auth.iat,
      exp: req.auth.exp,
    }

    return res.status(HTTP_STATUS_CODE.OK).json({
      error: 0,
      message: 'Token is valid',
      data,
    });
  }
);

export default router;
