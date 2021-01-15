import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';

test('renders header with title correctly', async () => {
    render(<Header title='heard' />);
    const headerTitle = screen.queryByText(/heard/i);
    expect(headerTitle).toBeInTheDocument();
});
