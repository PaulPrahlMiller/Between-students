import React, { useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { login } from '../../../context/auth/AuthState';
import styles from './LoginForm.module.css';

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
    <div className={styles.authForm}>
      <div className={styles.formHeader}>
        <h2>Login</h2>
      </div>
      <form
        onChange={handleOnChange}
        onSubmit={(e) => handleSubmit(e, formData)}
        ref={loginForm}
      >
        <div className={styles.formRow}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
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
            placeholder='Password'
            defaultValue={formData.password}
            required
            className={styles.formInput}
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
