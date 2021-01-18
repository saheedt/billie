import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import CompanyList from './screens/CompanyList';

import './App.css';
import { request } from './utils';

interface Companies {
  budget: number;
  budget_spent: number;
  date_of_first_purchase: string;
  id: number;
  name: string;
}

interface requestError {
  error: any
}

function App() {
  const [companies, setCompanies] = useState<Companies[] | undefined>(undefined);
  const [error, setError] = useState<requestError | undefined>(undefined);

  const fetchCompanies = async () => {
    const [companies, error] = await request({ url: './data/companies.json', method: 'GET' });
    error && setError(error)
    companies && setCompanies(companies);
  }

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <main className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header title="Billie" />
      <CompanyList companies={companies || []}/>
    </main>
  );
}

export default App;
