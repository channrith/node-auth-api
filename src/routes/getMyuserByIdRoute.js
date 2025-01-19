import express from 'express';
import expressJwt from 'express-jwt';
import { getMyuserByIdAction } from '../action';
import { ENV } from '../constant';

const router = express.Router();

router.get(
  '/user/:id',
  expressJwt({
    secret: ENV.JWT_SECRET,
    algorithms: ['HS256'],
  }),
  async (req, res) => {
    const { data, error, message, status } = await getMyuserByIdAction(
      req.params.id
    );
    return res.status(status).json({
      error,
      message,
      data,
    });
  }
);

export default router;
