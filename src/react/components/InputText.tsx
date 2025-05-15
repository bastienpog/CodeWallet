import React from 'react';

interface InputTextProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<InputTextProps> = ({ label, name, value, onChange }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-bold mb-2">{label}</label>
        <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-custom-violet2"
        />
    </div>
);

