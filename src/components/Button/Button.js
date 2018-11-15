import React from 'react';
import { button } from './Button.module.scss';

const Button = ({ label, background, color, onClick }) => (
    <button 
        className={[button, background, color].join(' ')}
        onClick={onClick}
    >
        {label}
    </button>
);

export default Button;