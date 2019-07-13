import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID b57215263d243d6c9caec1d910420a43112c3c0830f14fba9b6bbf33eabe38da'
    }
});