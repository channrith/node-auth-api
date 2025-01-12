import jwt from 'jsonwebtoken';
import { ENV } from '../constant';
import { forbiddenRequest, unauthorizedRequest } from '../util';

const authenticateToken = async (req, res, next) => {
  console.log(req.cookies);
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return unauthorizedRequest(res);

  try {
    const user = await jwt.verify(token, ENV.JWT_SECRET);
    if (token !== req.cookies[`t.${user._id}`]) {
      return unauthorizedRequest(res, 'Token expired');
    }
    req.user = user;
  } catch (error) {
    return forbiddenRequest(res);
  }

  return next();
};

export default authenticateToken;
