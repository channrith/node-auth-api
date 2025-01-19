import request from 'supertest';
import { myUserSigninAction } from '../../action';
import app from '../../app';

describe('Myuser Action Tests', () => {
  describe('Signin Action', () => {
    it('should return an error if username is missing', async () => {
      const response = await request(app).post('/signin').send({
        password: 'password123',
      });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe(1);
      expect(response.body.message).toBe('Please enter your login username');
    });

    it('should return an error if password is missing', async () => {
      const response = await request(app).post('/signin').send({
        username: 'user123',
      });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe(1);
      expect(response.body.message).toBe('Please enter your password');
    });

    it('should pass if username and password are provided', async () => {
      const res = await myUserSigninAction({
        username: 'user123',
        password: 'password123',
      });
      expect(res.status).toBe(200);
      expect(res.message).toBe('OK');
    });
  });
});
