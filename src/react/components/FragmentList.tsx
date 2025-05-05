import { FragmentCard } from './FragmentCard';

const fragments = [
    { title: 'Titre du fragment', tags: ['tags', 'tags', 'tags'] },
    { title: 'Titre du fragment', tags: ['tags', 'tags', 'tags'] },
    { title: 'Titre du fragment', tags: ['tags', 'tags', 'tags'] },
    { title: 'Titre du fragment', tags: ['tags', 'tags', 'tags'] },
];

export const FragmentList = () => {
    return (
        <div className="space-y-4 p-4">
            {fragments.map((fragment, idx) => (
                <FragmentCard key={idx} title={fragment.title} tags={fragment.tags} />
            ))}
        </div>
    );
};
