import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Origin select field', () => {
  it('Renders correctly at the sceen', () => {
    const rtl = render(<App />);
    expect(rtl.queryByTestId('container')).toBeTruthy();
  });
});
