import axios from 'axios';

import { apiViaCep } from './api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API', () => {
  it('Should be able to get data address', async () => {
    const dataAddress = {
      cep: '02050-010',
      logradouro: 'Rua Miguel Mentem',
      complemento: '',
      bairro: 'Vila Guilherme',
      localidade: 'São Paulo',
      uf: 'SP',
      unidade: '',
      ibge: '3550308',
      gia: '1004',
    };

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: dataAddress,
      }),
    );

    const { data } = await apiViaCep.get('/02050-010/json');

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(data).toEqual(dataAddress);
  });

  it('Should be able to error', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: 400,
      }),
    );

    const { status } = await apiViaCep.get('/132145-773/json');

    expect(status).toEqual(400);
  });
});
