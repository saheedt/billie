import React, { useState, useEffect } from 'react';
import Button from '../Button';
import './BudgetEdit.css';

interface Props {
    id: number;
    name: string;
    budget: number;
}
const BudgetEdit: React.FC<Props> = ({ id, name, budget }) => {
    const [activeBudget, setActiveBudget] = useState<number>(budget);

    // TODO: check for input validity, lift state up
    return (
        <section>
            <form>
                <div>
                    <strong><h3>{name}</h3></strong>
                </div>
                <div>
                    <input type='currency' value={activeBudget} />
                </div>
                <div>
                    <Button title="Complete" />
                </div>
            </form>
        </section>
    );
}

export default BudgetEdit;