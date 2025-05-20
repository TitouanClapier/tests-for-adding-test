import { createUser, getUsers, resetStore } from '../usersStore';

describe('usersStore', () => {
  beforeEach(() => {
    resetStore();
  });

  it('getUsers returns a copy of the internal array', () => {
    createUser('Alice');
    const list = getUsers();
    list.push({ id: 999, name: 'Bob' });
    expect(getUsers()).toEqual([{ id: 1, name: 'Alice' }]);
  });
});
