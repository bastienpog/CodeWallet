import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FragmentButton } from './components/FragmentButton';
import { FragmentList } from './components/FragmentList';
import { CustomThemeProvider } from './components/ThemeProvider';
import { FragmentModal } from './components/FragmentModal';

export const App = () => {

  const [snippets, setSnippets] = useState<Snippet[]>([]); // Liste des snippets

  useEffect(() => {
    // Chargement des snippets au lancement
    const fetchSnippets = async () => {
      const data = await window.SnippetAPI.readSnippet();
      setSnippets(data);
    };
    fetchSnippets();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false); // État du modal
  const [selectedCode, setSelectedCode] = useState<string>(''); // Code affiché dans le modal
  const [selectedId, setSelectedId] = useState<number>(); // ID du snippet sélectionné

  // Ouvre le modal avec le code et l’ID du snippet
  const handleViewCode = (code: string, id: number) => {
    setSelectedCode(code);
    setSelectedId(id);
    setIsModalOpen(true);
  };

  // Supprime un snippet après confirmation
  const handleDelete = (id: number) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce fragment ?")) return;

    const updatedSnippets = snippets.filter(s => s.id !== id);
    window.SnippetAPI.writeSnippet(updatedSnippets).then(() => {
      setSnippets(updatedSnippets);
      setIsModalOpen(false);
    });
  };

  return (
    <CustomThemeProvider>
      <div className="min-h-screen bg-white text-black dark:bg-custom-black dark:text-white">
        <Navbar />
        <FragmentButton />
        <FragmentList onViewCode={handleViewCode} snippets={snippets} />
        <FragmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          code={selectedCode}
          id={selectedId}
          onDelete={() => handleDelete(selectedId)}
          language="javascript"
        />
      </div>
    </CustomThemeProvider>
  );
}
