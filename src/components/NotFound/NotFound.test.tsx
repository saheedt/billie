import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '.';
import Button from '../Button';

test('renders NotFound with correct message', async () => {
    render(<NotFound message="nOOT"/>);
    const message = screen.queryByText(/nOOT/i);
    expect(message).toBeInTheDocument();
});


test('renders NotFound child correct', async () => {
    render(
        <NotFound message="text">
            <Button title="inner"/>
        </NotFound>
    );
    const message = screen.queryByText(/text/i);
    expect(message).toBeInTheDocument();

    const btnText = screen.queryByText(/inner/i);
    expect(btnText).toBeInTheDocument();
});

test('rendered NotFound child functions correct', async () => {
    let value = 1;
    const handler = ()=> value++
    render(
        <NotFound message="text">
            <Button title="inner" clickHandler={handler}/>
        </NotFound>
    );
    const message = screen.queryByText(/text/i);
    expect(message).toBeInTheDocument();

    const btnText = screen.queryByText(/inner/i);
    expect(btnText).toBeInTheDocument();

    btnText?.click();
    expect(value).toEqual(2);
});
