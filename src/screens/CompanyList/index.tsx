import React, { useEffect, useState } from 'react';
import { notify } from 'react-notify-toast';
import CompanyDetails from '../../components/CompanyDetails';
import Modal from '../../components/Modal';
import BudgetEdit from '../../components/BudgetEdit';
import NotFound from '../../components/NotFound';
import Button from '../../components/Button';

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
    retry?: () => void
}

const CompanyList: React.FC<Props> = ({ companies, retry }) => {

    const [selected, setSelected] = useState<SelectedCoy | undefined>(undefined);
    const [localCompanies, setLocalCompanies] = useState<CompanyData[] | undefined>(undefined);

    useEffect(() => {
        setLocalCompanies(companies)
    }, [companies]);

    const handleCompanySelect = (company: SelectedCoy) => {
        setSelected(company);
        setTimeout(() => { document.getElementById('modal')?.focus(); }, 100);
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
        notify.show('Budget updated successfully', 'success', 3500);
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
            <NotFound message="No company to showcase">
                 <Button title="Retry" extraStyle={{ height: '50px' }} clickHandler={retry} />
            </NotFound>
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
            <section className="company-list-container shadow">
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
