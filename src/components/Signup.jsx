import FormAction from './FormAction';
import Input from './Input';
import axios from '../services/axios-config';
import { register } from '../app/slices/authSlice';
import { signupFields } from '../constants/formFields';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const fields = [...signupFields];
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState, 'am here sir');
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = async () => {
    try {
      const { data } = await axios.post('/auth/signup', {
        data: { ...signupState }
      });
      dispatch(register({ ...data }));
      navigate('/feeds');
    } catch (error) {
      console.error('ERROR: ', error);
      setError(error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          margin: '4em auto',
          width: '40%',
          boxShadow:
            'rgba(0,0,0,0.12) 0px 1px 3px, rgba(0,0,0,0.24) 0px 1px 2px',
          padding: '2em'
        }}
      >
        {fields.map((field) => (
          <Input
            key={field.id}
            field={field}
            handleChange={handleChange}
            id={field.id}
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            value={signupState[field.id]}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </form>
    </div>
  );
}
