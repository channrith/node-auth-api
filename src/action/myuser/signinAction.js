import jwt from 'jsonwebtoken';
import { MyUser } from '../../model';
import { badRequest, successRequest } from '../../util';
import { ENV } from '../../constant';

const signinAction = async ({ username, password }) => {
  const user = await MyUser.findOne({ username });
  if (!user) {
    return badRequest('User with that email does not exist. Please signup');
  }

  // authenticate
  if (!user.authenticate(password)) {
    return badRequest('User with that email does not exist. Please signup');
  }

  // generate a token and send to client
  const token = jwt.sign({ _id: user._id }, ENV.JWT_SECRET, {
    expiresIn: '7d',
  });
  const { _id, name, email, role } = user;

  return successRequest({ token, user: { _id, name, email, role } });
};

export default signinAction;
