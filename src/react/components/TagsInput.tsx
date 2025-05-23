import React, { useState } from 'react';

interface TagsInputProps {
    label: string;
    tags: string[];
    onTagsChange: (tags: string[]) => void;
}

export const TagsInput: React.FC<TagsInputProps> = ({ label, tags, onTagsChange }) => {
    const [inputValue, setInputValue] = React.useState('');

    // Mise à jour de la valeur saisie
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    // Ajouter un tag quand on tape Entrée ou Virgule
    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        if ((e.key === 'Enter' || e.key === ',') && inputValue.trim() !== '') {
            e.preventDefault();
            onTagsChange([...tags, inputValue.trim()]);
            setInputValue('');
        }
    };

    // Supprimer un tag par index
    const removeTag = (indexToRemove: number) => {
        onTagsChange(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div>
            {/* Label du champ */}
            <label htmlFor="tags" className="block text-sm font-bold mb-2">{label}</label>

            {/* Champ de saisie des tags */}
            <input
                type="text"
                id="tags"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder="Enter a tag and press Enter or Comma"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-custom-violet2"
            />

            {/* Affichage des tags */}
            <div className="flex flex-wrap gap-1 items-center space-x-2 mt-2">
                {tags.map((tag, index) => (
                    <div key={index} className="bg-blue-500 text-white py-1 px-2 rounded-full text-sm flex items-center">
                        {tag}
                        <button
                            type="button"
                            className="ml-1 focus:outline-none text-white hover:text-blue-200"
                            onClick={() => removeTag(index)}
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
