import React from 'react';
import Button from '../Button';
import './Modal.css';

interface Props {
    children?: React.ReactNode
}

const Modal: React.FC<Props> = ({ children }) => {
    return (
        <section className="modal" aria-label="Modal">
            <div className="modal__btn-container">
                <Button title="close" extraStyle={{width: '30%'}}/>
            </div>
            {children && <div className="modal__children-container">{children}</div>}
        </section>
    );
}

export default Modal;
