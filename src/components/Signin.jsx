import { useEffect, useState } from 'react';

import FormAction from './FormAction';
import FormExtra from './FormExtra';
import Input from './Input';
import axios from '../services/axios-config';
import { loginFields } from '../constants/formFields';
import { signin } from '../app/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const fields = [...loginFields];
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('AUTHENTICATING...');
    try {
      const res = await axios.post('/auth/signin', {
        data: {
          email,
          password
        }
      });
      console.log('RESPONSE: ', res);
      dispatch(signin({ ...res.data }));
      navigate('/feeds');
    } catch (err) {
      setError(err);
      console.log('ERROR: ', err);
      console.log('ERRMSG:', err.message);
    }
  };

  const textFields = [];
  fields.forEach((field) => {
    if (field.type === 'text') textFields.push(field);
  });

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
        padding: '1em',
        margin: '5em auto',
        boxShadow: 'rgba(0,0,0,0.12) 0px 1px 3px, rgba(0,0,0,0.24) 0px 1px 2px',
        borderRadius: '5px'
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <input
          name="email"
          type="email"
          required
          value={email}
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)}
        />

        <input
          name="password"
          type="password"
          require
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassowrd(target.value)}
        />
        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Signin" />
      </div>
    </form>
  );
}
