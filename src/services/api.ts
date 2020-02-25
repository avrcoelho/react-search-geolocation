import axios from 'axios';

const { REACT_APP_URL_API_VIACEP, REACT_APP_URL_API_MAPS } = process.env;

export const apiViaCep = axios.create({
  baseURL: REACT_APP_URL_API_VIACEP,
});

export const apiMaps = axios.create({
  baseURL: REACT_APP_URL_API_MAPS,
});
