import express from 'express';
import { loginValidator, runValidation } from '../util';
import { myUserSigninAction } from '../action';

const router = express.Router();

router.post('/signin', loginValidator, runValidation, async (req, res) => {
  const { username, password } = req.body;
  const { data, error, message, status } = await myUserSigninAction({
    username,
    password,
  });

  return res.status(status).json({
    error,
    message,
    data,
  });
});

export default router;
