

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

export function Input({ type, name, placeholder, label }) {
  return (
    <FormPart label={label} className="Input" >
      <input type={type} name={name} placeholder={placeholder} />
    </FormPart>
  );
}
// Input will take in type props and pass it in


export function Select({ label, name, value, children }) {
  return (
    <FormPart label={label} className="Select">
      <select name={name} value={value}>
        {children}
      </select>
    </FormPart>
  ); 
}

// export function SelectFruit() {
//   return (
//     <FormPart label="Pick a Fruit" className="select-fruit" >
//       <select name="fruit">
//         <option value="apple">Apple</option>
//         <option value="orange">Orange</option>
//         <option value="banana">Banana</option>
//       </select>
//     </FormPart>
//   );
// }

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
