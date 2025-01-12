import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import { connectDB } from './config';
import { ENV } from './constant';
import {
  signupValidator,
  badRequest,
  successRequest,
  internalServerError,
  loginValidator,
  runValidation,
} from './util';
import { asyncHandler } from './middleware';
import { MyUser } from './models';

const startServer = async () => {
  const app = express();
  const route = express.Router();
  app.use(cors());

  // connect to DB
  await connectDB();

  // status route
  route.get('/status', async (_, res) => {
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

  route.get(
    '/user/:id',
    expressJwt({
      secret: ENV.JWT_SECRET,
      algorithms: ['HS256'],
    }),
    asyncHandler(async (req, res) => {
      const userId = req.params.id;
      const user = await MyUser.findById(userId);
      if (!user) {
        return badRequest(
          res,
          'User with that email does not exist. Please signup'
        );
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      return successRequest(res, user);
    })
  );

  route.post(
    '/signup',
    signupValidator,
    runValidation,
    asyncHandler(async (req, res) => {
      const newUser = new MyUser(req.body);

      const responseData = await newUser.save(newUser);
      return successRequest(res, responseData);
    })
  );

  route.post(
    '/signin',
    loginValidator,
    runValidation,
    asyncHandler(async (req, res) => {
      const { username, password } = req.body;

      const user = await MyUser.findOne({ username });
      if (!user) {
        return badRequest(
          res,
          'User with that email does not exist. Please signup'
        );
      }

      // authenticate
      if (!user.authenticate(password)) {
        return badRequest(res, 'Username and password do not match');
      }

      // generate a token and send to client
      const token = jwt.sign({ _id: user._id }, ENV.JWT_SECRET, {
        expiresIn: '7d',
      });
      const { _id, name, email, role } = user;

      return successRequest(res, { token, user: { _id, name, email, role } });
    })
  );

  // the middleware
  app.use(express.json({ limit: '4mb' }), route);

  app.listen(ENV.APP_PORT, () => {
    console.log(`Server is running on port ${ENV.APP_PORT}`);
  });
};

startServer();
