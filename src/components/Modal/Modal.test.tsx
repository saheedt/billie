import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '.';

test('renders correctly with a button to close the modal', async () => {
    render(<Modal closeModal={() =>{}} />);
    const closeBtn = screen.queryByText(/close/i);
    expect(closeBtn).toBeInTheDocument();
});

test('correctly invokes the close button', async () => {
    const closeBtnMock = jest.fn();
    render(<Modal closeModal={closeBtnMock} />);
    const closeBtn = screen.queryByText(/close/i);
    closeBtn?.click();
    expect(closeBtnMock).toHaveBeenCalled();
});

test('correctly renders child component', async () => {
    const closeBtnMock = jest.fn();
    render(
        <Modal closeModal={closeBtnMock}>
            <button>inner btn</button>
        </Modal>
    );
    const innerBtn = screen.queryByText(/inner btn/i);
    expect(innerBtn).toBeInTheDocument();
});
