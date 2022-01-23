import axios from 'axios'


const axiosInstance = axios.create({
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
        ? `Bearer ${localStorage.getItem('access_token')}`// this is like saying 'Bearer 49582048902485kfjdkj'
        : null,                                        // so it's just the access token on the header 
        'Content-Type': 'application/json',            // if there is a token format it, else return null
        accept: 'application/json'
    },
})

export default axiosInstance