import React from 'react';
import { Helper } from '../../utils';
import './CompanyDetails.css';

interface SelectedCoy {
    id: number;
    name: string;
    budget: number;
    budgetSpent: number;
}

interface Props {
    id: number;
    name: string;
    budget: number;
    budgetSpent: number;
    dateOfFirstPurchase: string;
    onClick: (company: SelectedCoy) => void
};
const CompanyDetails: React.FC<Props> = ({ id, name, budget, budgetSpent, dateOfFirstPurchase, onClick }) => {
    
    return (
        <li onClick={() => {onClick({id, name, budget, budgetSpent})}} className="company-details">
            <div className="company-details__item">{name}</div>
            <div className="company-details__item">{Helper.formatCurrency({ amount: budget })}</div>
            <div className="company-details__item">{Helper.formatCurrency({ amount: budgetSpent })}</div>
            <div className="company-details__item">{Helper.formatCurrency({ amount: (budget - budgetSpent) })}</div>
            <div className="company-details__item">{dateOfFirstPurchase}</div>
        </li>
    )
}

export default CompanyDetails