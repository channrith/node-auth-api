import { HTTP_STATUS_CODE, HTTP_RESPONSE_MESSAGE } from '../constant';

/**
 * The request succeeded
 */
export const successRequest = (
  data = {},
  message = HTTP_RESPONSE_MESSAGE.OK
) => {
  return {
    data,
    error: 0,
    message,
    status: HTTP_STATUS_CODE.OK,
  };
};

/**
 * Description: The request has succeeded and a new resource has been created
 * Return: 201 Created
 */
export const createdRequest = (
  res,
  message = HTTP_RESPONSE_MESSAGE.CREATED,
  data = {}
) => {
  return res.status(HTTP_STATUS_CODE.CREATED).json({
    error: 0,
    message,
    data,
  });
};

/**
 * Description: The server successfully processed the request and is not returning any content
 * Return: 204 No Content
 */
export const noContentRequest = (
  message = HTTP_RESPONSE_MESSAGE.NO_CONTENT
) => {
  return {
    data,
    error: 0,
    message,
    status: HTTP_STATUS_CODE.NO_CONTENT,
  };
};

/**
 * The server could not understand the request due to invalid syntax
 */
export const badRequest = (message = HTTP_RESPONSE_MESSAGE.BAD_REQUEST) => {
  return {
    data: {},
    error: 1,
    message,
    status: HTTP_STATUS_CODE.BAD_REQUEST,
  };
};

/**
 * Description: The client must authenticate itself to get the requested response
 * Return: 401 Unauthorized Request
 */
export const unauthorizedRequest = (
  message = HTTP_RESPONSE_MESSAGE.UNAUTHORIZED
) => {
  return {
    data: {},
    error: 1,
    message,
    status: HTTP_STATUS_CODE.UNAUTHORIZED,
  };
};

/**
 * Description: The client does not have access rights to the content
 * Return: 403 Forbidden Request
 */
export const forbiddenRequest = (message = HTTP_RESPONSE_MESSAGE.FORBIDDEN) => {
  return {
    data: {},
    error: 1,
    message,
    status: HTTP_STATUS_CODE.FORBIDDEN,
  };
};

/**
 * Description: The server could not find the requested resource
 * Return: 404 Not Found
 */
export const notFoundRequest = (message = HTTP_RESPONSE_MESSAGE.NOT_FOUND) => {
  return {
    data: {},
    error: 1,
    message,
    status: HTTP_STATUS_CODE.NOT_FOUND,
  };
};

/**
 * Description: The request method is not supported by the server
 * Return: 405 Method Not Allowed
 */
export const methodNotAllowedRequest = (
  message = HTTP_RESPONSE_MESSAGE.METHOD_NOT_ALLOWED
) => {
  return {
    data: {},
    error: 1,
    message,
    status: HTTP_STATUS_CODE.METHOD_NOT_ALLOWED,
  };
};

/**
 * Description: The server encountered an internal error
 * Return: 500 Internal Server Error
 */
export const internalServerError = (
  message = HTTP_RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR
) => {
  return {
    data: {},
    error: 1,
    message,
    status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
  };
};

/**
 * Description: The server does not support the functionality required to fulfill the request
 * Return: 501 Not Implemented
 */
export const notImplementedRequest = (
  message = HTTP_RESPONSE_MESSAGE.NOT_IMPLEMENTED
) => {
  return {
    data: {},
    error: 1,
    message,
    status: HTTP_STATUS_CODE.NOT_IMPLEMENTED,
  };
};

/**
 * Description: The server is acting as a gateway and received an invalid response
 * Return: 502 Bad Gateway
 */
export const badGatewayRequest = (
  message = HTTP_RESPONSE_MESSAGE.BAD_GATEWAY
) => {
  return {
    data: {},
    error: 1,
    message,
    status: HTTP_STATUS_CODE.BAD_GATEWAY,
  };
};

/**
 * Description: The server is not ready to handle the request
 * Return: 503 Service Unavailable
 */
export const serviceUnavailableRequest = (
  message = HTTP_RESPONSE_MESSAGE.SERVICE_UNAVAILABLE
) => {
  return {
    data: {},
    error: 1,
    message,
    status: HTTP_STATUS_CODE.SERVICE_UNAVAILABLE,
  };
};

/**
 * Description: The server is acting as a gateway and did not receive a response in time
 * Return: 504 Gateway Timeout
 */
export const gatewayTimeoutRequest = (
  message = HTTP_RESPONSE_MESSAGE.GATEWAY_TIMEOUT
) => {
  return {
    data: {},
    error: 1,
    message,
    status: HTTP_STATUS_CODE.GATEWAY_TIMEOUT,
  };
};
