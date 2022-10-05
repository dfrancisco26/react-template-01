import { render, screen } from '@testing-library/react';

import { UsernameInput } from '../components/Form/FormParts';

test('renders username input', () => {
  render(<UsernameInput name="username" />);
  const usernameInput = screen.getByLabelText('Username');
  expect(usernameInput.name).toBe('username');
});
