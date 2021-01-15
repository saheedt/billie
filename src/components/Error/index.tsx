import React from 'react';
import './Error.css';

interface Props {
    message: string;
    children?: React.ReactNode
}

const Error: React.FC<Props> = ({message, children}) => {
    return (
        <section className="error-container" aria-label="Error message">
            <div id="error-msg"><h4>{message}</h4></div>
            {children && <div className="error-child-container">{children}</div>}
        </section>
    );
};

export default Error;
