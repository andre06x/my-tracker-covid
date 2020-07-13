import axios from 'axios'

const api = axios.create({
    baseURL: `https://api.covid19api.com/total/country/brazil/status/confirmed?from=2020-03-01&to=`
})

export default api;
