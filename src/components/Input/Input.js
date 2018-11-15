import React from 'react';
import { input } from './Input.module.scss';

const Input = ({ type, minLength, maxLength, onChange, value, placeholder }) => (
    <input 
        className={[input].join(' ')}
        type={type}
        minLength={minLength ? minLength : 8}
        maxLength={maxLength ? maxLength : 24}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
);

export default Input;