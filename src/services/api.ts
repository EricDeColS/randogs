import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.thedogapi.com',
});

const loadRandom = () => api.get('/v1/images/search')

export default api;
