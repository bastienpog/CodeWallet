import { Eye } from 'lucide-react';

interface FragmentCardProps {
    title: string;
    tags: string[];
}

export const FragmentCard = ({ title, tags }: FragmentCardProps) => {
    return (
        <div className="bg-custom-violet1 p-4 rounded-md flex items-center justify-between text-white">
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <div className="flex items-center space-x-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-custom-violet2 text-white py-1 px-2 rounded-sm">
                        {tag}
                    </span>
                ))}
                <button className="bg-custom-green text-white py-1 px-4 rounded-xl text-sm flex items-center space-x-2">
                    <Eye />
                    <span>voir le code</span>
                </button>
            </div>
        </div>
    );
};