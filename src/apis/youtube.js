import axios from 'axios';


const KEY = 'AIzaSyC7v2y0IlAHtftSIJF6UV1Wx-22wW4D7Nk';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }

});