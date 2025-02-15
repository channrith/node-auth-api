import { MyUser } from '../../model';
import { badRequest, successRequest } from '../../util';

const signupAction = async (userData) => {
  const existingUser = await MyUser.findOne({ username: userData.username });
  if (existingUser) {
    return badRequest('Username already exists.');
  }

  const newUser = new MyUser(userData);

  const responseData = await newUser.save(newUser);
  return successRequest(responseData);
};

export default signupAction;
