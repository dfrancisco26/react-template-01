

function FormPart({ children, className, label }) {
  return (
    <label className={className}>
      <LabelText text={label} />
      {children}
    </label>
  );
}

export function LabelText({ text }) {
  return (
    <label className="label-text">
      {text}
    </label>
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

export function Checkbox({ legend }) {
  return (
    <FormPart label={legend} className="checkbox">
      <legend>{legend}
        <input type="checkbox" name="checkbox" />
      </legend>
    </FormPart>
  );
}

export function SubmitButton() {
  return (
    <div>
      <button type="submit">Submit</button>
    </div>
  );
}
