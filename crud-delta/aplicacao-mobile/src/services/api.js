import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.88.66.44:3000',
  });

export default api;