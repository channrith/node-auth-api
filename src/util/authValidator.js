import { body, validationResult } from 'express-validator';
import { badRequest } from './http';

export const loginValidator = [
  body('username', 'Please enter your login username').notEmpty(),
  body('password', 'Please enter your password').notEmpty(),
];

export const signupValidator = [
  body('email')
    .notEmpty()
    .withMessage('Email field is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 chars long')
    .matches(/\d/)
    .withMessage('Password must contain a number'),
];

export const validationErrorFormat = (errors) => {
  const errorData = errors.array();

  const { path: field, msg: message } = errorData[0];
  return { field, message };
};

export const runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const { message: errorMessage } = validationErrorFormat(errors);
    const { data, error, message, status } = badRequest(errorMessage);
    return res.status(status).json({
      error,
      message,
      data,
    });
  }
  return next();
};
