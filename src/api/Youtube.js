import axios from 'axios';

const KEY = 'AIzaSyDxEFyrtugyXDRsbHwuahJrOBt4FoiBMyM';

const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

export default {
    search(params) {
        return axiosInstance.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 20,
                key: KEY,
                order: 'viewCount',
                ...params              
            }
        })
    }
}


