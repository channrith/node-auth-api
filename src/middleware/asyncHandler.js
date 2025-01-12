import { badRequest, internalServerError } from '../util';

/**
 * Get unique error field name
 */
const uniqueMessage = (error) => {
  let output;
  try {
    const fieldName = error.message.substring(
      error.message.lastIndexOf('.$') + 2,
      error.message.lastIndexOf('_1')
    );

    output =
      fieldName.charAt(0).toUpperCase() +
      fieldName.slice(1) +
      ' already exists';
  } catch (ex) {
    output = 'Unique field already exists';
  }

  return output;
};

/**
 * Return error message from error object
 */
const errorHandler = (error) => {
  let { message } = error;
  if (error.name === 'CastError') {
    message = `Resource not found`;
  } else if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(error);
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (const errorName in error.errors) {
      if (error.errors[errorName].message)
        message = error.errors[errorName].message;
    }
  }

  return message;
};

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    const message = errorHandler(error);

    if (error.name === 'ValidationError' || error.name === 'CastError') {
      badRequest(res, message); // 400 Bad Request
    } else if (error.name === 'MongoServerError' || error.code) {
      badRequest(res, message); // 400 for database-related issues
    } else {
      internalServerError(res, message); // 500 Internal Server Error
    }
  }
};

export default asyncHandler;
