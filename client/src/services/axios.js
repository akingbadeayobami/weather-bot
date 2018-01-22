import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "http://localhost:4000";

export default instance;