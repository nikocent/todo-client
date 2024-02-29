import axios from 'axios';

export default axios.create({
    baseURL: 'https://todo-server-myna.onrender.com'
});