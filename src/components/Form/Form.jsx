import {
  UsernameInput,
  PasswordInput,
  SelectFruit,
  CatPerson,
  SubmitButton,
} from './FormParts';

export default function Form() {
  return (
    <form>
      <UsernameInput />
      <PasswordInput />
      <SelectFruit />
      <CatPerson />
      <SubmitButton />
    </form>
  );
}
