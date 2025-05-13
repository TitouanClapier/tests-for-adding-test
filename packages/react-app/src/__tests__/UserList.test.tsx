// src/__tests__/UserList.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserList } from '../components/UserList';

describe('UserList', () => {
  it('affiche le loader puis la liste des utilisateurs', async () => {
    render(<UserList />);
    expect(screen.getByRole('status')).toHaveTextContent('Chargement...');
    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('Alice');
    expect(items[1]).toHaveTextContent('Bob');
  });
});
