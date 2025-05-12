import { FragmentCard } from './FragmentCard';
interface FragmentListProps {
    snippets: Snippet[];
    onViewCode: (code: string) => void;
}

export const FragmentList = ({ snippets, onViewCode }: FragmentListProps) => {
    return (
        <div className="space-y-4 p-4">
            {snippets.map((snippet, index) => (
                <FragmentCard
                    key={index}
                    title={snippet.title}
                    language={snippet.language}
                    tags={snippet.tags}
                    onViewCode={() => onViewCode(snippet.code)}
                />
            ))}
        </div>
    );
};
