import { connectDB } from './config';
import { ENV } from './constant';
import app from './app';

const startServer = async () => {
  await connectDB();

  app.listen(ENV.APP_PORT, () => {
    console.log(`Server is running on port ${ENV.APP_PORT}`);
  });
};

startServer();
