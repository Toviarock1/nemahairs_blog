import axios from 'axios';

const instance = axios.create({
    baseURL: "https://nemahairs-comments-default-rtdb.firebaseio.com"
});

export default instance;