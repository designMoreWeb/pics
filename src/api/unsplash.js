import axios from 'axios';


export default axios.create({
    baseURL: 'https: //api.unpslash.com',
    headers: {
        Authorization: 'Client-ID 99d043cafac1caa8807a6312ba12ca7a70846b2c27e463f16360270565786993'
    }
});