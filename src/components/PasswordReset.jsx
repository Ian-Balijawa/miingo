import FormAction from './FormAction';
import Input from './Input';
import { passwordResetFields } from '../constants/formFields';
import { useState } from 'react';

const fields = [...passwordResetFields];
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Login() {
  const [passwordResetState, setPasswordResetState] = useState(fieldsState);

  const handleChange = (e) => {
    setPasswordResetState({
      ...passwordResetState,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();

    console.log('Password Reset State: ', passwordResetState);
  };

  //Handle Login API Integration here
  const authenticateUser = () => {};

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={passwordResetState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
