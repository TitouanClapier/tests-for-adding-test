import { rest } from 'msw';
import { User } from '../hooks/useUsers';

let users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

export const handlers = [
  rest.get('/users', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
];
