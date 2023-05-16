import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '561ff60bc3cb46e98e22d308ec518a54',
    },
});
