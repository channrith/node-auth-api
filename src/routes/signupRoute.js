import express from 'express';
import { signupValidator, runValidation } from '../util';
import { myUserSignupAction } from '../action';

const router = express.Router();

router.post('/signup', signupValidator, runValidation, async (req, res) => {
  const { data, error, message, status } = await myUserSignupAction(
    ...req.body
  );
  return res.status(status).json({
    error,
    message,
    data,
  });
});

export default router;
