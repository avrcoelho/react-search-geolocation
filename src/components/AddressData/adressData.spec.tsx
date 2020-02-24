import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import axios from 'axios';

import AddressData from './index';
import Search from '../Search';
import AddressProvider from '../../context/useAddress';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AdsressData Component', () => {
  it('Should be able no data', () => {
    const { queryByTestId } = render(
      <AddressProvider>
        <AddressData />
      </AddressProvider>,
    );

    expect(queryByTestId(/dataContainer/i)).toBeNull();
  });

  it('Should be able data', async () => {
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

    mockedAxios.get.mockResolvedValueOnce({ data: dataAddress });

    const { getByTestId, queryByTestId } = render(
      <AddressProvider>
        <Search />
        <AddressData />
      </AddressProvider>,
    );

    fireEvent.change(getByTestId('postalCode'), {
      target: { value: '13214-770' },
    });

    fireEvent.submit(getByTestId('form'));

    await wait(() => expect(queryByTestId(/dataContainer/i)).toBeTruthy());
  });
});
