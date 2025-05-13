import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserForm } from '../components/UserForm';

test('envoie le nom saisi au submit', async () => {
  const onCreated = jest.fn();
  render(<UserForm onCreated={onCreated} />);
  const input = screen.getByLabelText('Nom :');
  await userEvent.type(input, 'Charlie');
  await userEvent.click(screen.getByRole('button', { name: 'Créer' }));
  expect(onCreated).toHaveBeenCalledWith('Charlie');
});
