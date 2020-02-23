import axios from 'axios';

export const apiViaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});
