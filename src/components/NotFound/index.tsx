import React from 'react';
import './NotFound.css';

interface Props {
    message: string;
    children?: React.ReactNode
}

const NotFound: React.FC<Props> = ({ message, children }) => {
    return (
        <section className="not-found-container" aria-label="Resource not found notification">
            <div id="not-found-msg"><h4>{message}</h4></div>
            {children && <div className="not-found-child-container">{children}</div>}
        </section>
    );
};

export default NotFound;
