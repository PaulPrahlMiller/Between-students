import React, { useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { login } from '../../context/auth/AuthState';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const loginForm = useRef(null);

  const [authState, authDispatch] = useAuth();
  let navigate = useNavigate();

  const { isAuthenticated } = authState;

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    navigate('/register');
  };

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    if (loginForm.current.reportValidity()) {
      login(authDispatch, formData);
      navigate('/account');
    }
  };

  if (isAuthenticated) return <Navigate to='/account' replace={true} />;

  return (
    <div className='auth-form'>
      <form
        onChange={handleOnChange}
        onSubmit={(e) => handleSubmit(e, formData)}
        ref={loginForm}
      >
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            defaultValue={formData.email}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            defaultValue={formData.password}
            required
          />
        </div>
        <div className='form-group'>
          <input type='submit' value='Login' />
        </div>
      </form>
      <div className='auth-form-message'>
        Not a member?{' '}
        <span onClick={handleClick} className='auth-form-nav'>
          Register
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
