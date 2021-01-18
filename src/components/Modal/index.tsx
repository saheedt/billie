import React from 'react';
import Button from '../Button';
import './Modal.css';

interface Props {
    closeModal: () => void;
    children?: React.ReactNode
}

const Modal: React.FC<Props> = ({ children, closeModal }) => {
    return (
        <section className="modal" aria-label="Modal">
            <div className="modal__btn-container">
                <Button title="close" clickHandler={closeModal} extraStyle={{width: '30%', maxWidth: '200px', height: '60%'}}/>
            </div>
            {children && <div className="modal__children-container">{children}</div>}
        </section>
    );
}

export default Modal;
