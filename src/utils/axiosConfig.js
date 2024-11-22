import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://localhost:5005',  // Change en fonction de ton URL backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosConfig;
