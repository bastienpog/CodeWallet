interface Snippet {
  id: number;
  title: string;
  language: string;
  tags: string[];
  code: string;
}

interface SnippetAPI {
  readSnippet: () => Promise<Snippet[]>;
  writeSnippet: (data: Snippet[]) => Promise<boolean>;
}

interface Window {
  SnippetAPI: SnippetAPI;
}
