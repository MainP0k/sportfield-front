import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Remplacez par l'URL de votre API
});

export default api;