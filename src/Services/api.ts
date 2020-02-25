import axios from 'axios';

export const apiViaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});

export const apiMaps = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
});
