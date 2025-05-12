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

  const addSnippet = (snippet: Snippet) => {
    const updated = [...snippets, snippet];
    window.SnippetAPI.writeSnippet(updated).then(() => setSnippets(updated));
  };

  const deleteSnippet = (id: number) => {
    const updated = snippets.filter((s) => s.id !== id);
    window.SnippetAPI.writeSnippet(updated).then(() => setSnippets(updated));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState<string>('');

  const handleViewCode = (code: string) => {
    setSelectedCode(code);
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    setIsModalOpen(false);
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
          onDelete={handleDelete}
          language="javascript"
        />
      </div>
    </CustomThemeProvider>
  );
}


