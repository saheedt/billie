import React, {useEffect, useState} from 'react';
import CompanyDetails from '../../components/CompanyDetails';
import Modal from '../../components/Modal';
import BudgetEdit from '../../components/BudgetEdit';
import './CompanyList.css';

interface CompanyData {
    budget: number;
    budget_spent: number;
    date_of_first_purchase: string;
    id: number;
    name: string;
}
interface SelectedCoy {
    id: number;
    name: string;
    budget: number;
    budgetSpent: number;
}

interface Props {
    companies: CompanyData[];
}

const CompanyList: React.FC<Props> = ({ companies }) => {

    const [selected, setSelected] = useState<SelectedCoy | undefined>(undefined);
    const [localCompanies, setLocalCompanies] = useState<CompanyData[] | undefined>(undefined);

    useEffect(() => {
        setLocalCompanies(companies)
    }, [companies]);

    const handleCompanySelect = (company: SelectedCoy) => {
        setSelected(company);
    }

    const handleModalClose = () => {
        setSelected(undefined);
    };

    const updateBudget = (selectedCompany: { id: number, budget: number }) => {
        const update = localCompanies && localCompanies.map((company) => {
            if (company.id === selectedCompany.id) {
                company.budget = selectedCompany.budget;
            }
            return company;
        });
        setLocalCompanies(update);
    }

    const renderCompanies = () => {
        return (localCompanies && localCompanies.length) ?
            localCompanies.map((company) => (
                <CompanyDetails
                    key={`${company.id}__${company.name}`}
                    id={company.id}
                    name={company.name}
                    budget={company.budget}
                    budgetSpent={company.budget_spent}
                    dateOfFirstPurchase={company.date_of_first_purchase}
                    onClick={handleCompanySelect}
                />
            ))
            :
            <h2>No company to showcase</h2>
    }
    return (
        <>
            {
                selected &&
                <Modal closeModal={handleModalClose}>
                    <BudgetEdit
                        id={selected.id}
                        name={selected.name}
                        budget={selected.budget}
                        budgetSpent={selected.budgetSpent}
                        updateBudget={updateBudget}
                        closeModel={handleModalClose}
                    />
                </Modal>
            }
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
        </>
    );
}

export default CompanyList;
