import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    // Delete authorization
    delete axios.defaults.headers.common['Authorization'];
  }
};
