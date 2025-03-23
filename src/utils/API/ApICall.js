import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const CREATE_SHORT_API = 'url-shortener';
console.log(process.env)

export const createShortIdByUrl = async (url) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${BASE_URL}/${CREATE_SHORT_API}`,
            data: {
                uri: url
            },
            headers:{
                'Test-Key': process.env.REACT_APP_SECURITY_JWT_TOKEN
            }
        })
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error)
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
