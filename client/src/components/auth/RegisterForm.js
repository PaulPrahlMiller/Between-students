import React, { useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { register } from '../../context/auth/AuthState';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { firstname, lastname, address, email, password, confirmPassword } =
    formData;

  const registerForm = useRef(null);

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
    navigate('/login');
  };

  const handleRegister = async (e, formData) => {
    e.preventDefault();
    const passwordMatch = password === confirmPassword;
    if (registerForm.current.reportValidity()) {
      if (passwordMatch) {
        register(authDispatch, {
          firstname,
          lastname,
          address,
          email,
          password
        });
        navigate('/account');
      } else {
        // Show error to user
      }
    }
  };

  if (isAuthenticated) return <Navigate to='/account' replace={true} />;

  return (
    <div className='auth-form'>
      <form
        onChange={handleOnChange}
        onSubmit={(e) => handleRegister(e, formData)}
        ref={registerForm}
      >
        <div className='form-group'>
          <label htmlFor='firstname'>First name</label>
          <input
            type='firstname'
            name='firstname'
            defaultValue={formData.firstname}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname'>Last name</label>
          <input
            type='lastname'
            name='lastname'
            defaultValue={formData.lastname}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            defaultValue={formData.address}
            required
          />
        </div>
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
          <label htmlFor='confirmPassword'>confirmPassword</label>
          <input
            type='password'
            name='confirmPassword'
            defaultValue={formData.confirmPassword}
            required
          />
        </div>
        <div className='form-group'>
          <input type='submit' value='Register' />
        </div>
      </form>
      <div className='auth-form-message'>
        Already a member?{' '}
        <span onClick={handleClick} className='auth-form-nav'>
          Login
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
