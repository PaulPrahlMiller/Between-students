import React, { useState, Fragment } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });
  const [isRegister, setisRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleOnChange = (e) => {
    setFormData({});
  };

  return (
    <div className='login-form'>
      <form onChange={handleOnChange}>
        {isRegister ? (
          <Fragment>
            <div className='form-group'>
              <label htmlFor='Name'>Name</label>
              <input type='text' name='name' value={formData.name} />
            </div>
            <div className='form-group'>
              <label htmlFor='surname'>Surname</label>
              <input type='text' name='surname' value={formData.surname} />
            </div>
          </Fragment>
        ) : null}
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' value={formData.email} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' value={formData.password} />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value={isRegister ? 'Register' : 'Login'}
            onSubmit={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
