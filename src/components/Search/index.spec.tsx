import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Search from './index';

describe('Search component', () => {
  it('Should be able to postal code invalid', () => {
    const { getByTestId, queryByTestId } = render(<Search />);

    fireEvent.change(getByTestId('postalCode'), {
      target: { value: '13214-77' },
    });

    fireEvent.submit(getByTestId('form'));

    expect(queryByTestId(/invalidPostalCode/i)).toBeTruthy();
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
