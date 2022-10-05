import { render, screen } from '@testing-library/react';
import { Input, Select } from '../components/Form/FormParts';

test('renders input and takes in props', () => {
  render(<Input type="text"
    name="username"
    label="Username"
    placeholder="username" />);
  const usernameInput = screen.getByLabelText('Username');
  expect(usernameInput.name).toBe('username');
  expect(usernameInput.type).toBe('text');
});

test('renders select and takes in props', () => {
  render(<Select label="Pick a Fruit" name="fruit" value="apple">
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="banana">Banana</option>
  </Select>);
  const selectFruit = screen.getByLabelText('Pick a Fruit');
  expect(selectFruit.name).toBe('fruit');
  expect(selectFruit.value).toBe('apple');
});

