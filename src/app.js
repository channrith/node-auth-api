import express from 'express';
import cors from 'cors';
import {
  getMyuserByIdRoute,
  serverStatusRoute,
  signinRoute,
  signupRoute,
} from './routes';

const app = express();
const route = express.Router();
app.use(express.json({ limit: '4mb' }), route);
app.use(cors());

app.use('/', serverStatusRoute);
app.use('/api', getMyuserByIdRoute);
app.use('/api', signinRoute);
app.use('/api', signupRoute);

export default app;
