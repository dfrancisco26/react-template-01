

function FormPart({ children, className, label }) {
  return (
    <div className={className}>
      <label>
        {label}
        {children}
      </label>
    </div>
  );
}

export function UsernameInput() {
  return (
    <FormPart label="Username" className="username-input" >
      <input type="text" name="username" placeholder="Username" />
    </FormPart>
  );
}

export function PasswordInput() {
  return (
    <FormPart label="Password" className="password-input" >
      <input type="password" name="password" placeholder="Password" />
    </FormPart>
  );
}

export function SelectFruit() {
  return (
    <FormPart label="Pick a Fruit" className="select-fruit" >
      <select name="fruit">
        <option value="apple">Apple</option>
        <option value="orange">Orange</option>
        <option value="banana">Banana</option>
      </select>
    </FormPart>
  );
}

export function CatPerson({ legend }) {
  return (
    <div>
      <label>
        <legend>{legend}
          <input type="checkbox" name="cat-person" />
        </legend>
            Are you a cat person?
      </label>
    </div>
  );
}

export function SubmitButton() {
  return (
    <div>
      <button type="submit">Submit</button>
    </div>
  );
}
