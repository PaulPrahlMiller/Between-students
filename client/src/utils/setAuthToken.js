import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    // Store the token
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Clear the token
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
