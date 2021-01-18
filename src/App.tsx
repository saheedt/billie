import React, { useEffect, useState } from 'react';
import Notifications from 'react-notify-toast';
import Header from './components/Header';
import CompanyList from './screens/CompanyList';
import Error from './components/Error';
import Button from './components/Button';
import Loader from './components/Loader';

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
  const [loading, setLoading] = useState(true);
  const url = './data/companies.json';

  const fetchCompanies = async (url: string) => {
    try {
      const [companies, error] = await request({ url, method: 'GET' });
      error && setError(error);
      companies && setCompanies(companies);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  const retry = () => {
    setLoading(true);
    setError(undefined);
    fetchCompanies(url);
  }

  useEffect(() => {
    fetchCompanies(url);
  }, []);

  return (
    <main className="App">
      <Header title="Billie" />
      {error ?
        <Error message="Error Fetching companies.">
          <Button title="Retry" extraStyle={{ height: '50px', backgroundColor: '#ffffff' }} clickHandler={retry} />
        </Error>
        :
        loading ?
            <Loader />
          :
            <CompanyList companies={companies || []} retry={retry} />
      }
      <Notifications options={{zIndex: 2000, top: '5rem'}}/>
    </main>
  );
}

export default App;
