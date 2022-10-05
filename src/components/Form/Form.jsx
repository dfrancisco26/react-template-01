import {
  Input,
  PasswordInput,
  SelectFruit,
  CatPerson,
  SubmitButton,
} from './FormParts';

export default function Form() {
  return (
    <form>
      <Input
        label="Username"
        type="text"
        name="username"
        placeholder="Username" />
      <Input
        label="Password"
        type="password"
        name="pasword"
        placeholder="Password" />
        
      <SelectFruit />
      <CatPerson />
      <SubmitButton />
    </form>
  );
}
