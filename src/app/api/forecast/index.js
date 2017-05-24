import * as axios from 'axios';

const APPID = '6b67b96d2c6dc8d34826367a8fdfcc61';
const CONFIG = {
    baseURL: 'http://api.openweathermap.org',
};

export const getForecast = cityId => axios.create(CONFIG)
    .get(`/data/2.5/forecast/daily?id=${cityId}&mode=json&units=metric&APPID=${APPID}`)
    .then(res => res.data);


