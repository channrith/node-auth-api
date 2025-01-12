import { HTTP_STATUS_CODE, HTTP_RESPONSE_MESSAGE } from '../constant';

/**
 * Description: The request succeeded
 * Return: 200 OK
 */
export const successRequest = (
  res,
  data = {},
  message = HTTP_RESPONSE_MESSAGE.OK
) => {
  return res.status(HTTP_STATUS_CODE.OK).json({
    error: 0,
    message,
    data,
  });
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
export const noContentRequest = (res) => {
  return res.status(HTTP_STATUS_CODE.NO_CONTENT).send();
};

/**
 * Description: The server could not understand the request due to invalid syntax
 * Return: 400 Bad Request
 */
export const badRequest = (
  res,
  message = HTTP_RESPONSE_MESSAGE.BAD_REQUEST
) => {
  return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
    error: 1,
    message,
    data: {},
  });
};

/**
 * Description: The client must authenticate itself to get the requested response
 * Return: 401 Unauthorized Request
 */
export const unauthorizedRequest = (
  res,
  message = HTTP_RESPONSE_MESSAGE.UNAUTHORIZED
) => {
  return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({
    error: 1,
    message,
    data: {},
  });
};

/**
 * Description: The client does not have access rights to the content
 * Return: 403 Forbidden Request
 */
export const forbiddenRequest = (
  res,
  message = HTTP_RESPONSE_MESSAGE.FORBIDDEN
) => {
  return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({
    error: 1,
    message,
    data: {},
  });
};

/**
 * Description: The server could not find the requested resource
 * Return: 404 Not Found
 */
export const notFoundRequest = (
  res,
  message = HTTP_RESPONSE_MESSAGE.NOT_FOUND
) => {
  return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
    error: 1,
    message,
    data: {},
  });
};

/**
 * Description: The request method is not supported by the server
 * Return: 405 Method Not Allowed
 */
export const methodNotAllowedRequest = (
  res,
  message = HTTP_RESPONSE_MESSAGE.METHOD_NOT_ALLOWED
) => {
  return res.status(HTTP_STATUS_CODE.METHOD_NOT_ALLOWED).json({
    error: 1,
    message,
    data: {},
  });
};

/**
 * Description: The server encountered an internal error
 * Return: 500 Internal Server Error
 */
export const internalServerError = (
  res,
  message = HTTP_RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR
) => {
  return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
    error: 1,
    message,
    data: {},
  });
};

/**
 * Description: The server does not support the functionality required to fulfill the request
 * Return: 501 Not Implemented
 */
export const notImplementedRequest = (
  res,
  message = HTTP_RESPONSE_MESSAGE.NOT_IMPLEMENTED
) => {
  return res.status(HTTP_STATUS_CODE.NOT_IMPLEMENTED).json({
    error: 1,
    message,
    data: {},
  });
};

/**
 * Description: The server is acting as a gateway and received an invalid response
 * Return: 502 Bad Gateway
 */
export const badGatewayRequest = (
  res,
  message = HTTP_RESPONSE_MESSAGE.BAD_GATEWAY
) => {
  return res.status(HTTP_STATUS_CODE.BAD_GATEWAY).json({
    error: 1,
    message,
    data: {},
  });
};

/**
 * Description: The server is not ready to handle the request
 * Return: 503 Service Unavailable
 */
export const serviceUnavailableRequest = (
  res,
  message = HTTP_RESPONSE_MESSAGE.SERVICE_UNAVAILABLE
) => {
  return res.status(HTTP_STATUS_CODE.SERVICE_UNAVAILABLE).json({
    error: 1,
    message,
    data: {},
  });
};

/**
 * Description: The server is acting as a gateway and did not receive a response in time
 * Return: 504 Gateway Timeout
 */
export const gatewayTimeoutRequest = (
  res,
  message = HTTP_RESPONSE_MESSAGE.GATEWAY_TIMEOUT
) => {
  return res.status(HTTP_STATUS_CODE.GATEWAY_TIMEOUT).json({
    error: 1,
    message,
    data: {},
  });
};
