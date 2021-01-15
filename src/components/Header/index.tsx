import React from 'react';
import './Header.css';

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({title}) => {
    return (
        <header className="main-header shadow">
            <div className="header-container">
                <div className="header-title"><h1>{title}</h1></div>
            </div>
        </header>
    );
};

export default Header;
