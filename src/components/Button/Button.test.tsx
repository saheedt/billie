import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

test('renders button with the correct title', async () => {
    render(<Button title="test btn 1" extraStyle={{width: '10px', height: '10px'}} />);
    const btn = screen.queryByText(/test btn 1/i);
    expect(btn).toBeInTheDocument();
});

test('calls button click handler correctly when clicked', async () => {
    let value = 0;
    const handler = ()=>{ value++ }
    render(<Button title='test btn' clickHandler={handler} />);
    const btn = screen.queryByText(/test btn/i);
    btn?.click()
    expect(value).toEqual(1);
});