import React from 'react';
import { render } from '@testing-library/react';
import ContactCard from './ContactCard';

test('renders text in DetailsCard component', () => {
    const { getByText } = render(<ContactCard />);
    const linkElement = getByText(/Phone/i);
    expect(linkElement).toBeInTheDocument();
});