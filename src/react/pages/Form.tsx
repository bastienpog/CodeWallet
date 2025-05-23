import React, { useState, useEffect } from 'react';
import { InputText } from '../components/InputText';
import { SelectLanguage } from '../components/SelectLanguage';
import { TagsInput } from '../components/TagsInput';
import { CodeEditor } from '../components/CodeEditor';
import { Navbar } from '../components/Navbar';
import { CustomThemeProvider } from '../components/ThemeProvider';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();
    const { id } = useParams(); // récupère l'id du snippet à éditer (si présent)
    const isEditMode = Boolean(id); // mode édition si id existe

    // données originales chargées (pour reset)
    const [originalData, setOriginalData] = useState<FormData | null>(null);

    // état local du formulaire (titre, langage, tags, code)
    const [formData, setFormData] = useState<FormData>({
        title: '',
        language: '',
        tags: [],
        code: '',
    });

    // liste des snippets chargés depuis l'API
    const [snippets, setSnippets] = useState<Snippet[]>([]);

    // au montage, charger les snippets et initialiser le formulaire si en édition
    useEffect(() => {
        window.SnippetAPI.readSnippet().then((data: Snippet[]) => {
            setSnippets(data);

            if (isEditMode) {
                // trouver le snippet à éditer par son id
                const snippetToEdit = data.find(s => s.id === Number(id));
                if (snippetToEdit) {
                    const snippetData = {
                        title: snippetToEdit.title,
                        language: snippetToEdit.language,
                        tags: snippetToEdit.tags,
                        code: snippetToEdit.code,
                    };
                    setFormData(snippetData);
                    setOriginalData(snippetData); // sauvegarder pour reset
                }
            };
        });
    }, [id]);

    // gérer les changements sur les champs texte, select, textarea
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // gérer la modification spécifique du code dans l’éditeur
    const handleCodeChange = (code: string) => {
        setFormData(prevData => ({
            ...prevData,
            code,
        }));
    };

    // gérer la modification des tags
    const handleTagsChange = (newTags: string[]) => {
        setFormData(prevData => ({
            ...prevData,
            tags: newTags,
        }));
    };

    // soumission du formulaire (création ou mise à jour)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isEditMode) {
            // mise à jour du snippet existant
            const updatedSnippets = snippets.map(snippet =>
                snippet.id === Number(id)
                    ? { ...snippet, ...formData, id: Number(id) }
                    : snippet
            );

            window.SnippetAPI.writeSnippet(updatedSnippets).then(() => {
                setSnippets(updatedSnippets);
                console.log("Snippet updated!");
                handleReset();
                navigate('/');
            });
        } else {
            // création d’un nouveau snippet avec un id timestamp
            const newSnippet: Snippet = {
                id: Date.now(),
                ...formData,
            };

            const updatedSnippets = [...snippets, newSnippet];

            window.SnippetAPI.writeSnippet(updatedSnippets).then(() => {
                setSnippets(updatedSnippets);
                console.log("Snippet created!");
                handleReset();
                navigate('/'); // rediriger vers la liste après actualisation
            });
        }
    };

    // écoute les raccourcis clavier Ctrl+S / Cmd+S pour sauvegarder automatiquement
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            const isSaveShortcut = (isMac && e.metaKey && e.key === 's') || (!isMac && e.ctrlKey && e.key === 's');

            if (isSaveShortcut) {
                e.preventDefault();
                handleSubmit(new Event('submit') as any);
                navigate('/');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [formData, snippets]);

    // remet le formulaire à ses valeurs initiales ou vides selon le mode
    const handleReset = () => {
        if (isEditMode && originalData) {
            setFormData(originalData);
        } else {
            setFormData({
                title: '',
                language: '',
                tags: [],
                code: '',
            });
        }
    };

    // options du select langage
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
                    {/* Titre du snippet */}
                    <div className="mb-4">
                        <InputText
                            label="Add a title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Langage + Tags côte à côte */}
                    <div className="mb-4 flex space-x-4">
                        <div className="w-1/3">
                            <SelectLanguage
                                label="Add a language"
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                options={languages}
                            />
                        </div>
                        <div className="w-2/3">
                            <TagsInput
                                label="Add tags"
                                tags={formData.tags}
                                onTagsChange={handleTagsChange}
                            />
                        </div>
                    </div>

                    {/* Éditeur de code */}
                    <div className="mb-4">
                        <CodeEditor
                            label="Add your code"
                            name="code"
                            value={formData.code}
                            onChange={handleCodeChange}
                            language={formData.language as any}
                        />
                    </div>

                    {/* Boutons Réinitialiser et Sauvegarder */}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-custom-violet1 hover:bg-custom-violet2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="bg-custom-green hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </CustomThemeProvider>
    );
};
