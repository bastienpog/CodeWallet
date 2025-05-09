import { FragmentCard } from './FragmentCard';
const fragments = [
    {
        title: 'Produit',
        language: 'javascript',
        tags: ['mongoose', 'model'],
        code: `import mongoose, { Schema } from 'mongoose';
  
  export const collection = 'Product';
  
  const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
  }, { timestamps: true });
  
  export default mongoose.model(collection, schema, collection);`
    },
    {
        title: 'Utilisateur',
        language: 'javascript',
        tags: ['user', 'auth'],
        code: `const user = { name: 'John', email: 'john@example.com' };`
    },
];

export const FragmentList = ({ onViewCode }: { onViewCode: (code: string) => void }) => {
    return (
        <div className="space-y-4 p-4">
            {fragments.map((fragment, index) => (
                <FragmentCard
                    key={index}
                    title={fragment.title}
                    language={fragment.language}
                    tags={fragment.tags}
                    onViewCode={() => onViewCode(fragment.code)}
                />
            ))}
        </div>
    );
};
