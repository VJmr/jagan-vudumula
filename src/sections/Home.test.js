import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders text in home component', () => {
    const { getByText } = render(<Home />);
    const linkElement = getByText(/Jagan Vudumula/i);
    expect(linkElement).toBeInTheDocument();
});