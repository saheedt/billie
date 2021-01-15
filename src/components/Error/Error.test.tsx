import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from '.';
import Button from '../Button';

test('renders Error with correct message', async () => {
    render(<Error message="xzy"/>);
    const errorMessage = screen.queryByText(/xzy/i);
    expect(errorMessage).toBeInTheDocument();
});

test('renders Error child correct', async () => {
    render(
        <Error message="big one">
            <Button title="inner big"/>
        </Error>
    );
    const message = screen.queryByText(/big one/i);
    expect(message).toBeInTheDocument();

    const btnText = screen.queryByText(/inner big/i);
    expect(btnText).toBeInTheDocument();
});

test('rendered Error child functions correct', async () => {
    let value = 10;
    const handler = ()=> value++
    render(
        <Error message="test text">
            <Button title="test inner text" clickHandler={handler}/>
        </Error>
    );
    const message = screen.queryByText(/test text/i);
    expect(message).toBeInTheDocument();

    const btnText = screen.queryByText(/test inner text/i);
    expect(btnText).toBeInTheDocument();

    btnText?.click();
    expect(value).toEqual(11);
});
