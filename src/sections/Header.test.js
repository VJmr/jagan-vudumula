import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders text in header component', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});
  