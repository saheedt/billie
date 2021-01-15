import React from 'react';
import logo from '../../logo.svg';

import './Loader.css';

const Loader: React.FC = () => {
    return (
        <section className="loader-container" aria-label="load indicator">
            <div className="loader-holder">
                <img src={logo} className="App-logo" alt="spinning loader indicator" />
            </div>
        </section>
    )
}

export default Loader;
