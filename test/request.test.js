const request = require('supertest');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = require('../routers/routes.js');

const app = express();
app.use(express.json());
app.use(router);

const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword
};

describe('POST /api/register', () => {
    test('should create new account', async () => {
      const data = {
        username: 'testusername',
        password: encryptPassword("testpassword"),
      };
  
      const response = await request(app)
        .post('/api/register')
        .send(data);
  
      expect(response.statusCode).toBe(201);
      expect(response.body.message).toBe('Account has been created');
    });
  });