import React from 'react';
import { render, screen } from '@testing-library/react';
import CompanyDetails from '.';

test('renders company details with correct values', async () => {
    const data = {
        name: "sample coy",
        budget: 1234.5600,
        budgetSpent: 234.5600,
        dOFP: '2120-01-14'
    };
    render(
        <CompanyDetails
            name={data.name}
            budget={data.budget}
            budgetSpent={data.budgetSpent}
            dateOfFirstPurchase={data.dOFP}
        />
    );
    const name = screen.queryByText(/sample coy/i);
    expect(name).toBeInTheDocument();
});

// test('calls button click handler correctly when clicked', async () => {
//     let value = 0;
//     const handler = ()=>{ value++ }
//     render(<CompanyDetails title='test btn' clickHandler={handler} />);
//     const btn = screen.queryByText(/test btn/i);
//     btn?.click()
//     expect(value).toEqual(1);
// });