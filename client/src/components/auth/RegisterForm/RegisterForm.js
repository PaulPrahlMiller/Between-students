import React, { useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { register } from '../../../context/auth/AuthState';
import styles from './RegisterForm.module.css';

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
    <div className={styles.authForm}>
      <form
        onChange={handleOnChange}
        onSubmit={(e) => handleRegister(e, formData)}
        ref={registerForm}
      >
        <div className={styles.formRow}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            defaultValue={formData.email}
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            defaultValue={formData.password}
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            defaultValue={formData.confirmPassword}
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.formRow}>
          <input type='submit' value='Register' className={styles.formButton} />
        </div>
      </form>
      <div className={styles.formMessage}>
        Already a member?{' '}
        <span onClick={handleClick} className={styles.actionText}>
          Login
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
