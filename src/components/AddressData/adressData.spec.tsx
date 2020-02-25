import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';

import AddressData from './index';
import { AddressContext } from '../../context/useAddress';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AdsressData Component', () => {
  it('Should be able no data', () => {
    const dataAddress = null;
    const setDataAddress = () => {};

    const { queryByTestId } = render(
      <AddressContext.Provider value={{ dataAddress, setDataAddress }}>
        <AddressData />
      </AddressContext.Provider>,
    );

    expect(queryByTestId(/dataContainer/i)).toBeNull();
  });

  it('Should be able data', async () => {
    const dataAddress = {
      cep: '02050-010',
      logradouro: 'Rua Miguel Mentem',
      bairro: 'Vila Guilherme',
      localidade: 'São Paulo',
      uf: 'SP',
    };
    const setDataAddress = () => {};

    mockedAxios.get.mockResolvedValueOnce({ data: dataAddress });

    const { queryByTestId } = render(
      <AddressContext.Provider value={{ dataAddress, setDataAddress }}>
        <AddressData />
      </AddressContext.Provider>,
    );

    expect(queryByTestId(/dataContainer/i)).toBeTruthy();
  });
});
