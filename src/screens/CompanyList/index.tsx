import React from 'react';
import CompanyDetails from '../../components/CompanyDetails'
import './CompanyList.css';

interface CompanyData {
    budget: number;
    budget_spent: number;
    date_of_first_purchase: string;
    id: number;
    name: string;
}
interface Props {
    companies: CompanyData[];
}

const CompanyList: React.FC<Props> = ({ companies }) => {

    const renderCompanies = () => {
        return (companies && companies.length) ?
            companies.map((company) => (
                <CompanyDetails
                    key={`${company.id}__${company.name}`}
                    id={company.id}
                    name={company.name}
                    budget={company.budget}
                    budgetSpent={company.budget_spent}
                    dateOfFirstPurchase={company.date_of_first_purchase}
                />
            ))
            :
            <h2>No company to showcase</h2>
    }
    return (
        <section className="company-list-container">
            <ul className="company-list">
                <li className="company-list__header">
                    <div className="company-list__header--item">Company Name</div>
                    <div className="company-list__header--item">Budget</div>
                    <div className="company-list__header--item">Budget Spent</div>
                    <div className="company-list__header--item">Budget Left</div>
                    <div className="company-list__header--item">Date Of First Purchase</div>
                </li>
                {renderCompanies()}
            </ul>
        </section>
    );
}

export default CompanyList;
