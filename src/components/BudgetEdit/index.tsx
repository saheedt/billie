import React, { useState, useEffect } from 'react';
import Button from '../Button';
import './BudgetEdit.css';

import { Helper, CurrencyCodes } from '../../utils';

const stripCurrencySymbol = Helper.stripCurrencySymbol;
const formatCurrency = Helper.formatCurrency;
const isValidCurrencyInput = Helper.isValidCurrencyInput;
const normalizeCurrency = Helper.normalizeCurrency

interface Props {
    id: number;
    name: string;
    budget: number;
    budgetSpent: number;
    updateBudget: (company: { id: number, budget: number }) => void
    closeModel?: () => void
}

const BudgetEdit: React.FC<Props> = ({ id, name, budget, budgetSpent, updateBudget, closeModel }) => {
    
    const [activeBudget, setActiveBudget] = useState<string>(
        stripCurrencySymbol(formatCurrency({ amount: budget }), CurrencyCodes.EUR)
    );
    const [isValidBudget, setIsValidBudget] = useState<boolean>(false);

    useEffect(() => {
        const isValid = isValidCurrencyInput(`${activeBudget}`);
        const normalized = normalizeCurrency(activeBudget);
        isValid && normalized >= budgetSpent && setIsValidBudget(true);
        (!isValid || normalized < budgetSpent) && setIsValidBudget(false);
    }, [activeBudget, budgetSpent]);

    const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveBudget(event.target.value);
    };

    return (
        <section className="budget-edit">
            <form className="budget-edit__form" onSubmit={(event) => {
                event.preventDefault();
                updateBudget({
                    id,
                    budget: normalizeCurrency(activeBudget)
                });
                setTimeout(()=>{ closeModel && closeModel(); }, 2000)
                
            }}>
                <div className="budget-edit__form-item">
                    <label htmlFor="name">Company Name</label>
                    <input type='text' id="name" value={name} readOnly />
                </div>
                <div className="budget-edit__form-item">
                    <label id="budget-label">Budget</label>
                    <input type='currency' id="currency" data-testid="currency" aria-labelledby={(() =>
                        !isValidBudget ? 'budget-label budget-info-label budget-error-label' : 'budget-label budget-info-label')()}
                        value={activeBudget} onChange={handleBudgetChange} />
                    <label id="budget-info-label">New budget should be greater than or equal to spent budget</label>
                    {!isValidBudget && <label className="budget-edit__error-label" id="budget-error-label">Valid currency format: (1.234,56)</label>}
                </div>
                <div className="budget-edit__form-item">
                    <Button title="Complete" extraStyle={{ height: '60%' }} disabled={!isValidBudget}/>
                </div>
            </form>
        </section>
    );
}

export default BudgetEdit;