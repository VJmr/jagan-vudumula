import React from 'react';
import { render } from '@testing-library/react';
import Skills from './Skills';

test('renders text in skills component', () => {
    const { getByText } = render(<Skills />);
    const linkElement = getByText(/Skills/i);
    expect(linkElement).toBeInTheDocument();
});