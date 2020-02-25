import React from 'react';
import { render } from '@testing-library/react';

import Header from './index';

describe('Header', () => {
  it('Should be able to render Header', () => {
    const { queryByTestId } = render(<Header />);

    expect(queryByTestId(/container-header/i)).toBeTruthy();
  });
});
