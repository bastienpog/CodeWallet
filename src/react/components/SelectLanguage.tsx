import React from 'react';

interface LanguageOption {
    value: string;
    label: string;
}

interface SelectLanguageProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: LanguageOption[];
}

export const SelectLanguage: React.FC<SelectLanguageProps> = ({ label, name, value, onChange, options }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-bold mb-2">{label}</label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight text-gray-500 focus:outline-none focus:shadow-outline  border-custom-violet2"
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

