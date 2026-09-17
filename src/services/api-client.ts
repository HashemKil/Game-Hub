import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c567e5f746b14312be9d95784540383b'
    }
})