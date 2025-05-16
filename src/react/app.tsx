import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FragmentButton } from './components/FragmentButton';
import { FragmentList } from './components/FragmentList';
import { CustomThemeProvider } from './components/ThemeProvider';
import { FragmentModal } from './components/FragmentModal';

export const App = () => {

  const [snippets, setSnippets] = useState<Snippet[]>([]);

  useEffect(() => {
    const fetchSnippets = async () => {
      const data = await window.SnippetAPI.readSnippet();
      setSnippets(data);
    };
    fetchSnippets();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState<string>('');
  const [selectedId, setSelectedId] = useState<number>()

  const handleViewCode = (code: string, id: number) => {
    setSelectedCode(code);
    setSelectedId(id)
    setIsModalOpen(true);
    console.log(selectedId)
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm("Voulez-vous vraiment supprimer ce fragment ?");
    if (!confirmed) return;

    const updatedSnippets = snippets.filter(snippet => snippet.id !== id);

    window.SnippetAPI.writeSnippet(updatedSnippets).then(() => {
      setSnippets(updatedSnippets);
      setIsModalOpen(false); // close the modal
      console.log("Snippet deleted from modal.");
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


