import axios from 'axios';

export default axios.create({
    baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
    headres:{"ngrok-skip-browser-warning": "true"}

});