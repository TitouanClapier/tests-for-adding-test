import request from 'supertest';
import { app } from '../server';
import { resetStore, createUser } from '../usersStore';
import * as fixtures from './fixtures';

describe('API Users – tests avancés', () => {
  beforeEach(() => {
    resetStore();
    fixtures.initialUsers.forEach(u => createUser(u.name));
  });

  describe('GET /users/:id', () => {
    const cases = [
      { id: 1, expected: fixtures.alice, status: 200 },
      { id: 2, expected: fixtures.bob, status: 200 },
      { id: 99, expected: { error: 'User not found' }, status: 404 }
    ] as const;

    test.each(cases)('id=$id → $status', async ({ id, expected, status }) => {
      const res = await request(app).get(`/users/${id}`);
      expect(res.status).toBe(status);
      expect(res.body).toEqual(expected);
    });
  });

  describe('PUT /users/:id', () => {
    it('sans body.name → 400', async () => {
      const res = await request(app).put('/users/1').send({});
      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: 'name is required' });
    });

    it('user inexistant → 404', async () => {
      const res = await request(app).put('/users/99').send({ name: 'New' });
      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: 'User not found' });
    });

    it('user existant → 200 & mis à jour', async () => {
      const res = await request(app).put('/users/2').send({ name: 'Bobby' });
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({ id: 2, name: 'Bobby' });
    });
  });
});
