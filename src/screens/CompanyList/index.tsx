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
                    name={company.name}
                    budget={company.budget}
                    budgetSpent={company.budget_spent}
                    dateOfFirstPurchase={company.date_of_first_purchase} />
            ))
            :
            <h2>No company to showcase</h2>
    }
    return (
        <ul>
            {renderCompanies()}
        </ul>
    )
}

export default CompanyList;
