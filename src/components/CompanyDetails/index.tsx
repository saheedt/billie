import React from 'react';
import { Helper } from '../../utils';
import './CompanyDetails.css';

interface Props {
    id: number;
    name: string;
    budget: number;
    budgetSpent: number;
    dateOfFirstPurchase: string;
};
const CompanyDetails: React.FC<Props> = ({ id, name, budget, budgetSpent, dateOfFirstPurchase }) => {
    
    return (
        <li onClick={ ()=>{ console.log(`won click mi at id: ${id}`)}} className="company-details">
            <div className="company-details__item">{name}</div>
            <div className="company-details__item">{Helper.formatCurrency({ amount: budget })}</div>
            <div className="company-details__item">{Helper.formatCurrency({ amount: budgetSpent })}</div>
            <div className="company-details__item">{Helper.formatCurrency({ amount: (budget - budgetSpent) })}</div>
            <div className="company-details__item">{dateOfFirstPurchase}</div>
        </li>
    )
}

export default CompanyDetails