import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

test('renders text in contact component', () => {
    const { getByText } = render(<Contact />);
    const linkElement = getByText(/Contact/i);
    expect(linkElement).toBeInTheDocument();
});
  