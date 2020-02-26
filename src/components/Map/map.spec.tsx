import React from 'react';
import { render, wait } from '@testing-library/react';
import axios from 'axios';

import Map from './index';
import { AddressContext } from '../../context/useAddress';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Map', () => {
  const dataAddress = {
    cep: '02050-010',
    logradouro: 'Rua Miguel Mentem',
    bairro: 'Vila Guilherme',
    localidade: 'São Paulo',
    uf: 'SP',
  };
  const setDataAddress = () => {};

  it('Should be able to don´t have map', () => {
    const { queryByTestId } = render(
      <AddressContext.Provider value={{ dataAddress, setDataAddress }}>
        <Map />
      </AddressContext.Provider>,
    );

    expect(queryByTestId(/mapgl/i)).toBeNull();
  });

  it('Should be able to error', async () => {
    const dataMap = {
      results: [
        {
          geometry: {
            location: {
              lat: 1,
              lng: 1,
            },
          },
        },
      ],
      error_message: 'Error',
    };

    mockedAxios.get.mockResolvedValueOnce({ data: dataMap });

    const { queryByTestId, getByText } = render(
      <AddressContext.Provider value={{ dataAddress, setDataAddress }}>
        <Map />
      </AddressContext.Provider>,
    );

    await wait(() => expect(queryByTestId(/error-map/i)).toBeTruthy());
    expect(queryByTestId(/error-map/i)).toContainElement(
      getByText('Erro ao obter a localização'),
    );
    expect(queryByTestId(/mapgl/i)).toBeNull();
  });

  it('Should be able to have map', async () => {
    const dataMap = {
      results: [
        {
          geometry: {
            location: {
              lat: 1,
              lng: 1,
            },
          },
        },
      ],
    };

    mockedAxios.get.mockResolvedValueOnce({ data: dataMap });

    const { queryByTestId } = render(
      <AddressContext.Provider value={{ dataAddress, setDataAddress }}>
        <Map />
      </AddressContext.Provider>,
    );

    await wait(() => expect(queryByTestId(/mapgl/i)).toBeTruthy());
    expect(queryByTestId(/error-map/i)).toBeNull();
  });

  it('Should be able to zero results', async () => {
    const dataMap = {
      results: [],
    };

    mockedAxios.get.mockResolvedValueOnce({ data: dataMap });

    const { queryByTestId, getByText } = render(
      <AddressContext.Provider value={{ dataAddress, setDataAddress }}>
        <Map />
      </AddressContext.Provider>,
    );

    await wait(() => expect(queryByTestId(/error-map/i)).toBeTruthy());
    expect(queryByTestId(/error-map/i)).toContainElement(
      getByText('Resultado não encontrado no mapa'),
    );
    expect(queryByTestId(/mapgl/i)).toBeNull();
  });
});
