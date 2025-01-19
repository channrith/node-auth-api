import { MyUser } from '../../model';
import { successRequest } from '../../util';

const signupAction = async (userData) => {
  const newUser = new MyUser(userData);

  const responseData = await newUser.save(newUser);
  return successRequest(responseData);
};

export default signupAction;
