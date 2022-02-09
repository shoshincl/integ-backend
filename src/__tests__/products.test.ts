const request = require('supertest');
const { app } = require('../app.ts');

describe('GET /products', () => {
  test('responds with json', () =>
    request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201));
  test('should return single product', () =>
    request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .query({ search: '1' })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res: any) => expect(res.body.products.length).toEqual(1))
      .catch());
  test('should return multiple products', () =>
    request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .query({ search: 'saas' })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res: any) => expect(res.body.products.length).toBeGreaterThan(1))
      .catch());
});
