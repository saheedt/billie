import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from '.';

test('renders header with title correctly', async () => {
    render(<Loader />);
    const loader = screen.queryByAltText(/spinning loader indicator/i);
    expect(loader).toBeInTheDocument();
});
