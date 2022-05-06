import React, { useState, useRef, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { login } from '../../../context/auth/AuthState';
import styles from './LoginForm.module.css';
import useAlert from '../../../hooks/useAlert';
import { clearError } from '../../../context/auth/AuthState';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [authState, authDispatch] = useAuth();

  const setAlert = useAlert()[1];

  const { isAuthenticated, error } = authState;

  useEffect(() => {
    if (error) {
      setAlert('danger', error);
      clearError(authDispatch);
    }
  }, [error]);

  let navigate = useNavigate();

  const loginForm = useRef(null);

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
    }
  };

  if (isAuthenticated) return <Navigate to='/account' replace={true} />;

  return (
    <div className={styles.authForm}>
      <div className={styles.formHeader}>
        <h2>Login</h2>
      </div>
      <form
        onChange={handleOnChange}
        onSubmit={(e) => handleSubmit(e, formData)}
        ref={loginForm}
        autoComplete='off'
      >
        <div className={styles.formRow}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            defaultValue={formData.email}
            required
            minLength='6'
            className={styles.formInput}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            defaultValue={formData.password}
            className={styles.formInput}
            required
            minLength='6'
          />
        </div>
        <div className={styles.formRow}>
          <input type='submit' value='Login' className={styles.formButton} />
        </div>
      </form>
      <div className={styles.formMessage}>
        <small>
          Not a member?{'  '}
          <span onClick={handleClick} className={styles.actionText}>
            <strong>Register</strong>
          </span>
        </small>
      </div>
    </div>
  );
};

export default LoginForm;
