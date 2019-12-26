import React from 'react';
import { render } from '@testing-library/react';
import Experiences from './Experiences';

test('renders text in experiences component', () => {
    const { getByText } = render(<Experiences />);
    const linkElement = getByText(/Work Experience/i);
    expect(linkElement).toBeInTheDocument();
});
  