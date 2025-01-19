import mongoose from 'mongoose';
import { connectDB } from './src/config';
import { MyUser } from './src/model';

export default async () => {
  await connectDB();
  await MyUser.deleteMany();

  await MyUser.insertMany([
    {
      username: 'user123',
      password: 'password123',
      email: 'user123@test.test',
      name: 'User 123',
    },
  ]);

  await mongoose.connection.close();
};
