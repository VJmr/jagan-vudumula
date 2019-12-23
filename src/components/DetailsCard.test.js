import React from 'react';
import { render } from '@testing-library/react';
import DetailsCard from './DetailsCard';

test('renders text in DetailsCard component', () => {
    const { getByText } = render(<DetailsCard />);
    const linkElement = getByText(/Respons/i);
    expect(linkElement).toBeInTheDocument();
});
  