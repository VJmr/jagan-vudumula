import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders text in footer component', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/Footer/i);
    expect(linkElement).toBeInTheDocument();
});