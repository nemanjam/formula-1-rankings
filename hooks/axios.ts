import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        get: {
          'x-rapidapi-key': 'default-application_7148315' // invalid key...
        }
      }
});

export default axiosInstance;