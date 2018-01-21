import axios from "axios";

const instance = axios.create();


// instance.defaults.baseURL = 'http://52.40.149.199';
// instance.defaults.baseURL = '';
instance.defaults.baseURL = "http://localhost:4000";

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

export default instance;