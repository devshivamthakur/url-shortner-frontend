import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const CREATE_SHORT_API = 'url-shortener';

export const createShortIdByUrl = async (url) => {
    try {
        const response = await axios.post(`${BASE_URL}/${CREATE_SHORT_API}`, { uri: url });
        return response.data;
    } catch (error) {
        return null;
    }
}

export const redirectToOriginalUrl = async (shortId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${shortId}`);
        if(!response.data || !response.data.data.redirectURL) return null

        window.location.href = response.data.data.redirectURL;
        return true
        
       
    } catch (error) {
       return null;
    }
}
