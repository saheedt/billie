import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BudgetEdit from '.';
import { Helper, CurrencyCodes } from '../../utils';

const stripCurrencySymbol = Helper.stripCurrencySymbol;
const formatCurrency = Helper.formatCurrency;
const data = {
    id: 12,
    name: 'Acme',
    budget: 2000.56,
    budgetSpent: 1000.56
}
test('renders BudgetEdit with the correct credentials', async () => {
    const formattedBudget = stripCurrencySymbol(formatCurrency({ amount: data.budget }), CurrencyCodes.EUR);
    render(
        <BudgetEdit
            id={data.id}
            name={data.name}
            budget={data.budget}
            budgetSpent={data.budgetSpent}
            updateBudget={()=>{}}
        />
    );
    const budgetInput = screen.getByTestId('currency');
    // @ts-ignore
    expect(budgetInput.value).toBe(formattedBudget);
});

test('disables button if input is invalid', async () => {
    render(
        <BudgetEdit
            id={data.id}
            name={data.name}
            budget={data.budget}
            budgetSpent={data.budgetSpent}
            updateBudget={()=>{}}
        />
    );

    const budgetInput = screen.getByTestId('currency');
    fireEvent.change(budgetInput, { target: { value: '1,200.45' } });
    expect(screen.getByText(/Complete/i)).toBeDisabled();
});

test('successfully updates company data when valid currency is supplied', async () => {
    const companies = [{ id: 12, budget: 0 }];
    const updateBuget = (company: { id: number, budget: number }) => {
        companies.forEach((coy) => {
            if (coy.id === company.id) {
                coy.budget = company.budget;
            }
        });
    };
    render(
        <BudgetEdit
            id={data.id}
            name={data.name}
            budget={data.budget}
            budgetSpent={data.budgetSpent}
            updateBudget={updateBuget}
            closeModel={()=>{}}
        />
    );

    const budgetInput = screen.getByTestId('currency');
    fireEvent.change(budgetInput, { target: { value: '3.000,56' } });
    const btn = screen.getByText(/Complete/i);
    btn?.click();
    expect(companies[0].budget).toEqual(3000.56);
});