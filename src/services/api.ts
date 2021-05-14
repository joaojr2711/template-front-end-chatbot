import axios from 'axios';

//configures watson connection rest service endpoint
const api = axios.create({
  // Ex: baseURL: 'http://localhost:3333'
  baseURL: 'http://localhost:3333',
});

export default api;
