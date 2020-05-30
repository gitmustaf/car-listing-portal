import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://krabhp3hz3.execute-api.us-east-1.amazonaws.com'
});
export default instance;