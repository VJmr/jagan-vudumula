import React from 'react';
import { render } from '@testing-library/react';
import Projects from './Projects';

test('renders text in projects component', () => {
    const { getByText } = render(<Projects />);
    const linkElement = getByText(/Projects/i);
    expect(linkElement).toBeInTheDocument();
});