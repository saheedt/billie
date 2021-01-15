import React from 'react';
import './Button.css';

interface Props {
    title: string;
    clickHandler?: (...args: any) => any;
    extraStyle?: { [key: string]: string };
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const Button: React.FC<Props> = ({title, clickHandler, extraStyle, type}) => {
    return(
        clickHandler ?
            
            <button className="button" onClick={clickHandler} style={extraStyle}>
                {title}
            </button>

            :

            <button className="button" type={type} style={extraStyle}>
                {title}
            </button>
            
    );
};

export default Button;
