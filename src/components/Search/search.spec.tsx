import React from 'react';
import { render, fireEvent, wait, act } from '@testing-library/react';
import axios from 'axios';

import Search from './index';
import AddressProvider from '../../context/useAddress';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Search component', () => {
  it('Should be able to postal code invalid', () => {
    const { getByTestId, queryByTestId, getByText } = render(
      <AddressProvider>
        <Search />
      </AddressProvider>,
    );

    fireEvent.change(getByTestId('postalCode'), {
      target: { value: '13214-77' },
    });

    fireEvent.submit(getByTestId('form'));

    expect(queryByTestId(/invalidPostalCode/i)).toBeTruthy();
    expect(queryByTestId(/invalidPostalCode/i)).toContainElement(
      getByText('CEP inválido'),
    );
  });

  it('Should be able to dont return data', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('some error'));

    const { getByTestId, queryByTestId, getByText } = render(
      <AddressProvider>
        <Search />
      </AddressProvider>,
    );

    fireEvent.change(getByTestId('postalCode'), {
      target: { value: '13214-770' },
    });

    fireEvent.submit(getByTestId('form'));

    expect(mockedAxios.get).toHaveBeenCalled();
    await wait(() => expect(queryByTestId(/invalidPostalCode/i)));
    expect(queryByTestId(/invalidPostalCode/i)).toContainElement(
      getByText('Erro ao obter o endereço'),
    );
  });

  it('Should be able to call API', async () => {
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
      </AddressProvider>,
    );

    fireEvent.change(getByTestId('postalCode'), {
      target: { value: '13214-770' },
    });

    fireEvent.submit(getByTestId('form'));

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(queryByTestId(/loading/i)).toBeTruthy();
    await wait(() => expect(queryByTestId(/invalidPostalCode/i)).toBeNull());
    expect(queryByTestId(/loading/i)).toBeNull();
  });

  it('Should be able postal code not found', async () => {
    const dataAddress = {
      erro: true,
    };

    mockedAxios.get.mockResolvedValueOnce({ data: dataAddress });

    const { getByTestId, queryByTestId, getByText } = render(
      <AddressProvider>
        <Search />
      </AddressProvider>,
    );

    fireEvent.change(getByTestId('postalCode'), {
      target: { value: '13214-772' },
    });

    fireEvent.submit(getByTestId('form'));

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(queryByTestId(/loading/i)).toBeTruthy();
    await wait(() => expect(queryByTestId(/invalidPostalCode/i)).toBeTruthy());
    expect(queryByTestId(/invalidPostalCode/i)).toContainElement(
      getByText('CEP não encontrado'),
    );
    expect(queryByTestId(/loading/i)).toBeNull();
  });
});
