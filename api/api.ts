import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.200.30.22:3000/api'
});

export default api