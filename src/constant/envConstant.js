import dotEnv from 'dotenv';

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'ci_test') {
  dotEnv.config({ path: './src/test/.test.env' });
}

const {
  APP_PORT,
  DB_CONNECTION_URI,
  DB_PASSWORD,
  DB_USERNAME,
  ROW_LIMIT,
  RETRY_INTERVAL,
  JWT_SECRET,
} = process.env;

const ENV = {
  APP_PORT: parseInt(APP_PORT, 10) || 3000,
  DB_CONNECTION_URI,
  DB_PASSWORD,
  DB_USERNAME,
  ROW_LIMIT: parseInt(ROW_LIMIT, 10) || 20,
  MAX_LIMIT: parseInt(ROW_LIMIT, 10) || 100,
  RETRY_INTERVAL: RETRY_INTERVAL ? parseInt(RETRY_INTERVAL, 10) : 30000,
  JWT_SECRET,
};

export default ENV;
