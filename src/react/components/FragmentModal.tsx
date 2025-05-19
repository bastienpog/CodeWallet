import { useEffect, useRef } from "react";
import { X, Trash2, PencilOff } from "lucide-react";
import hljs from "highlight.js";
import { useNavigate } from "react-router-dom";

interface FragmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    code: string;
    id: number;
    language?: string;
    onDelete: () => void;
}

export const FragmentModal: React.FC<FragmentModalProps> = ({
    isOpen,
    onClose,
    code,
    id,
    language,
    onDelete,
}) => {

    const codeRef = useRef<HTMLElement>(null);
    const navigate = useNavigate()

    const switchHighlightTheme = (theme: "light" | "dark") => {
        const existing = document.getElementById("hljs-theme") as HTMLLinkElement | null;
        const href = theme === "dark"
            ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"
            : "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css";

        if (existing) {
            existing.href = href;
        } else {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.id = "hljs-theme";
            link.href = href;
            document.head.appendChild(link);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();

            if ((e.ctrlKey || e.metaKey) && e.key === "c") {
                e.preventDefault();
                handleCopy();
            }
        };


        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";

            const isDark = document.documentElement.classList.contains("dark");
            switchHighlightTheme(isDark ? "dark" : "light");

            if (codeRef.current) {
                hljs.highlightElement(codeRef.current);
            }
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);


    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            alert("Code copied!");
        } catch (err) {
            alert("Failed to copy code.");
        }
    };

    const handleEdit = (id: number) => {
        navigate(`/edit/${id}`);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-30" onClick={onClose} />

            <div className="relative z-50 bg-white dark:bg-custom-black rounded-xl w-full max-w-2xl mx-4 p-6">
                <button onClick={onClose} className="absolute top-4 right-4 text-custom-violet1 hover:text-custom-violet2">
                    <X size={16} />
                </button>

                <pre className="overflow-auto max-h-[500px] text-sm bg-white dark:bg-custom-black p-4 rounded-md">
                    <code ref={codeRef} className={`language-${language}`}>
                        {code}
                    </code>
                </pre>

                <div className="flex justify-between mt-4">
                    <div className="space-x-1">
                        <button
                            onClick={onDelete}
                            className="bg-custom-violet1 hover:bg-custom-violet2 text-white py-1.5 px-4 rounded-full"
                        >
                            <Trash2 />
                        </button>
                        <button onClick={() => handleEdit(id)} className="bg-custom-violet1 hover:bg-custom-violet2 text-white py-1.5 px-4 rounded-full">
                            <PencilOff />
                        </button>
                    </div>
                    <button
                        onClick={handleCopy}
                        className="bg-custom-green hover:bg-green-500 text-white py-1.5 px-4 rounded-full"
                    >
                        copier
                    </button>
                </div>
            </div>
        </div>
    );
};
