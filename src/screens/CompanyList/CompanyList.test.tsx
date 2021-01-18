import React from 'react';
import { render, screen } from '@testing-library/react';
import CompanyList from '.';

const data = [{
    "id": 1,
    "name": "Acme",
    "budget": 19800.7800,
    "budget_spent": 4500.0000,
    "date_of_first_purchase": "2119-07-07"
}];

test('renders appropriate message if data to render is empty', async () => {
    render(
        <CompanyList
            companies={[]}
            retry={()=>{}}
        />
    );
    const message = screen.queryByText(/No company to showcase/i);
    const btn = screen.queryByText(/Retry/i);
    expect(message).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
});

test('retry button works as intended when on error', async () => {
    let count = jest.fn();

    render(
        <CompanyList
            companies={[]}
            retry={count} 
        />
    );

    const btn = screen.queryByText(/Retry/i);
    btn?.click();
    expect(count).toHaveBeenCalled();
});

test('renders appropriate data', async () => {
    render(
        <CompanyList
            companies={data}
            retry={()=>{}}
        />
    );
    const liItem = screen.queryByText(/Acme/i);
    expect(liItem).toBeInTheDocument();
});
