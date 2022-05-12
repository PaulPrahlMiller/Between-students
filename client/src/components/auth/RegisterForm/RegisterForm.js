import React, { useState, useRef, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { clearError, register } from '../../../context/auth/AuthState';
import styles from './RegisterForm.module.css';
import useAlert from '../../../hooks/useAlert';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { email, password, confirmPassword } = formData;

  const [authState, authDispatch] = useAuth();

  const { isAuthenticated, error } = authState;

  const setAlert = useAlert()[1];

  useEffect(() => {
    if (error) {
      setAlert('danger', error);
      clearError(authDispatch);
    }
  }, [error, authDispatch, setAlert]);

  let navigate = useNavigate();

  const registerForm = useRef(null);

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
          email,
          password
        });
      } else {
        setAlert('danger', 'Passwords do not match');
      }
    }
  };

  if (isAuthenticated) return <Navigate to='/account' replace={true} />;

  return (
    <div className={styles.authForm}>
      <div className={styles.formHeader}>
        <h2>Register</h2>
      </div>
      <form
        onChange={handleOnChange}
        onSubmit={(e) => handleRegister(e, formData)}
        ref={registerForm}
        autoComplete='off'
      >
        <div className={styles.formRow}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            defaultValue={formData.email}
            required
            minLength='6'
            className={styles.formInput}
            autoComplete='new-password' // When set to 'off' it does not work as intended. 'new-password' prevents autocomplete
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            defaultValue={formData.password}
            required
            minLength='6'
            className={styles.formInput}
            autoComplete='new-password' // When set to 'off' it does not work as intended. 'new-password' prevents autocomplete
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
