import axios from 'axios';

const KEY = 'AIzaSyCjL9wbXQe71eGCsWa1_o3-nAzlywie6vw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});