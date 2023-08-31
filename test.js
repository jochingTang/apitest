const request = require('supertest');
const app = require('./index');

describe('GET /convert', () => {
  it('should return converted amount', async () => {
    const response = await request(app).get('/convert').query({
      source: 'USD',
      target: 'JPY',
      amount: '$1,525'
    });

    expect(response.status).toBe(200);
    expect(response.body.msg).toBe('success');
    expect(parseFloat(response.body.amount.replace('$', '').replace(',', ''))).toBeCloseTo(170496.52, 2);

  });

  it('should return error for invalid currency', async () => {
    const response = await request(app).get('/convert').query({
      source: 'EUR',
      target: 'JPY',
      amount: '$1,525'
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid source or target currency');
  });
});