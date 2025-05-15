import React, { useState, useEffect } from 'react';
import { InputText } from '../components/InputText';
import { SelectLanguage } from '../components/SelectLanguage';
import { TagsInput } from '../components/TagsInput';
import { CodeEditor } from '../components/CodeEditor';
import { Navbar } from '../components/Navbar';
import { CustomThemeProvider } from '../components/ThemeProvider';

interface FormData {
    title: string;
    language: string;
    tags: string[];
    code: string;
}

interface Snippet extends FormData {
    id: number;
}

export const CodeForm: React.FC = () => {

    const [snippets, setSnippets] = useState<Snippet[]>([]);
    useEffect(() => {
        window.SnippetAPI.readSnippet().then((data: Snippet[]) => {
            console.log("Snippets loaded:", data);
            setSnippets(data);
        });
    }, []);

    const [formData, setFormData] = useState<FormData>({
        title: '',
        language: '',
        tags: [],
        code: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCodeChange = (code: string) => {
        setFormData((prevData) => ({
            ...prevData,
            code,
        }));
    };

    const handleTagsChange = (newTags: string[]) => {
        setFormData((prevData) => ({
            ...prevData,
            tags: newTags,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newSnippet: Snippet = {
            id: Date.now(),
            title: formData.title,
            language: formData.language,
            tags: formData.tags,
            code: formData.code,
        };

        const updatedSnippets = [...snippets, newSnippet];

        window.SnippetAPI.writeSnippet(updatedSnippets).then(() => {
            setSnippets(updatedSnippets);
            console.log("Snippet written!");
            handleReset(); // Optional: clear form after save
        });
    };

    const handleReset = () => {
        setFormData({
            title: '',
            language: '',
            tags: [],
            code: '',
        });
    };

    const languages = [
        { value: '', label: 'Sélectionner le langage' },
        { value: 'javascript', label: 'JavaScript' },
        { value: 'typescript', label: 'TypeScript' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'cpp', label: 'C++' },
        { value: 'csharp', label: 'C#' },
        { value: 'php', label: 'PHP' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'go', label: 'Go' },
        { value: 'swift', label: 'Swift' },
    ];

    return (
        <CustomThemeProvider>
            <div className="min-h-screen bg-white text-black dark:bg-custom-black dark:text-white">
                <Navbar />
                <form
                    onSubmit={handleSubmit}
                    className="m-6 p-6 rounded-md border border-solid border-custom-violet2"
                >
                    <div className="mb-4">
                        <InputText
                            label="Ajouter un titre"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4 flex space-x-4">
                        <div className="w-1/3">
                            <SelectLanguage
                                label="Ajouter le langage"
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                options={languages}
                            />
                        </div>
                        <div className="w-2/3">
                            <TagsInput
                                label="Ajouter des tags"
                                tags={formData.tags}
                                onTagsChange={handleTagsChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <CodeEditor
                            label="Ajouter votre fragment"
                            name="code"
                            value={formData.code}
                            onChange={handleCodeChange}
                            language={formData.language as any}
                        />
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-custom-violet1 hover:bg-custom-violet2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Supprimer
                        </button>
                        <button
                            type="submit"
                            className="bg-custom-green hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sauvegarder
                        </button>
                    </div>
                </form>
            </div>
        </CustomThemeProvider>
    );
};