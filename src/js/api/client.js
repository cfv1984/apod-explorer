import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.nasa.gov/planetary",
    params : {
        api_key: "duKaa6n8QL4O9MWfLYibLpuuyvxKscZttjznhTxU"
    }
});

export default instance;
