const request = require('supertest');
const { app } = require('../app.ts');

describe('TEST DB', () => {
  test('db connection');
});

describe('GET /users', () => {
  test('responds with json', () =>
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201));
  test('accept params', () =>
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .query({ id: 1 })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res: any) => expect(res.body.id).toEqual(1))
      .catch());
  test('test param typeof');
  test('user should not exist', () => {
    expect('user').toBeFalsy();
  });
  test('user should exist', () => {
    //mock user find
    it('should return true', () => {
      expect('user.age').toBeGreaterThan(0);
      expect('user.age').toBeLessThan(5);
    });
    it('should return false', () => {
      expect('user.age').toBeLessThan(5);
      expect('user.age').toEqual(0);
    });
  });
});
