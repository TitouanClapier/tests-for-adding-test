import request from 'supertest';
import { app } from '../server';
import { resetStore } from '../usersStore';

describe('API Users – TDD complet', () => {
  beforeEach(() => {
    resetStore();
  });

  it('GET /users → 200 & []', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('POST /users sans name → 400', async () => {
    const res = await request(app).post('/users').send({});
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'name is required' });
  });

  it('POST /users avec name → 201 & user', async () => {
    const res = await request(app).post('/users').send({ name: 'Alice' });
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({ id: 1, name: 'Alice' });
  });

  it('GET /users après création → liste avec Alice', async () => {
    await request(app).post('/users').send({ name: 'Alice' });
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: 1, name: 'Alice' }]);
  });
});
