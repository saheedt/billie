import React from 'react';
import './Button.css';

interface Props {
    title: string;
    clickHandler?: (...args: any) => any;
    extraStyle?: { [key: string]: string };
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    disabled?: boolean
}

const Button: React.FC<Props> = ({title, clickHandler, extraStyle, type, disabled}) => {
    return(
        clickHandler ?
            
            <button className="button shadow" onClick={clickHandler} style={extraStyle} disabled={disabled}>
                {title}
            </button>

            :

            <button className="button shadow" type={type} style={extraStyle} disabled={disabled}>
                {title}
            </button>
            
    );
};

export default Button;
