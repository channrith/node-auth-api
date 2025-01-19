import { MyUser } from '../../model';
import { badRequest, successRequest } from '../../util';

const getMyuserByIdAction = async (userId) => {
  const user = await MyUser.findById(userId);
  if (!user) {
    return badRequest('User with that email does not exist. Please signup');
  }
  user.hashed_password = undefined;
  user.salt = undefined;
  return successRequest(user);
};

export default getMyuserByIdAction;
