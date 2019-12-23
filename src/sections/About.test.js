import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('renders text in about component', () => {
    const { getByText } = render(<About />);
    const linkElement = getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
});
  