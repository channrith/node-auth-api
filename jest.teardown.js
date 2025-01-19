import mongoose from 'mongoose';
import { connectDB } from './src/config';
import { MyUser } from './src/model';

export default async () => {
  await connectDB();
  await MyUser.deleteMany();
  await mongoose.connection.close();
};
