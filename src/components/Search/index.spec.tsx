import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import axios from 'axios';

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

  it('Should be able to postal code valid', () => {
    const { getByTestId, queryByTestId } = render(<Search />);

    fireEvent.change(getByTestId('postalCode'), {
      target: { value: '13214-770' },
    });

    fireEvent.submit(getByTestId('form'));

    expect(queryByTestId(/invalidPostalCode/i)).toBeNull();
  });
});
