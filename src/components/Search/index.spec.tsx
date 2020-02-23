import React from 'react';
import axios from 'axios';
import { render, fireEvent, wait, act } from '@testing-library/react';

import Search from './index';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Search component', () => {
  it('Should be able to postal code invalid', () => {
    const { getByTestId, queryByTestId, getByText } = render(<Search />);

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
    const { getByTestId, queryByTestId, getByText } = render(<Search />);

    fireEvent.change(getByTestId('postalCode'), {
      target: { value: '13214-770' },
    });

    fireEvent.submit(getByTestId('form'));

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: 400,
      }),
    );

    await wait(() => expect(queryByTestId(/invalidPostalCode/i)).toBeTruthy());
    await wait(() =>
      expect(queryByTestId(/invalidPostalCode/i)).toContainElement(
        getByText('Erro ao obter o endereço'),
      ),
    );
  });

  it('Should be able to call API', () => {
    const { getByTestId } = render(<Search />);

    act(() => {
      fireEvent.change(getByTestId('postalCode'), {
        target: { value: '13214-770' },
      });

      fireEvent.submit(getByTestId('form'));
    });

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: 1,
      }),
    );
  });
});
