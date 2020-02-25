import React from 'react';
import { render } from '@testing-library/react';

import Home from './index';

describe('Home', () => {
  it('Should be able to render Header', () => {
    const { queryByTestId } = render(<Home />);

    expect(queryByTestId(/container-header/i)).toBeTruthy();
    expect(queryByTestId(/container-address-data/i)).toBeTruthy();
    expect(queryByTestId(/container-search/i)).toBeTruthy();
    expect(queryByTestId(/container-map/i)).toBeTruthy();
  });
});
