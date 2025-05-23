import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { Extension } from "@uiw/react-codemirror";
import { LanguageName } from "@uiw/codemirror-extensions-langs";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

interface CodeEditorProps {
    label: string;
    name: string;
    value: string;
    language: LanguageName;
    onChange: (value: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
    label,
    name,
    value,
    language,
    onChange,
}) => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    // Thème clair personnalisé
    const lightTheme = createTheme({
        theme: "light",
        settings: {
            background: "#ffffff",
            foreground: "#9955ff",
            caret: "#8841ff",
            selection: "#9955ff26",
            lineHighlight: "#f7f7f7",
            gutterBackground: "#ffffff",
            gutterForeground: "#808080",
        },
        styles: [
            { tag: t.comment, color: "#808080" },
            { tag: t.variableName, color: "#5ec2b7" },
            { tag: [t.string, t.special(t.brace)], color: "#333333" },
            { tag: t.bool, color: "#9955ff" },
            { tag: t.keyword, color: "#8841ff" },
            { tag: t.className, color: "#5ec2b7" },
            { tag: t.attributeName, color: "#8841ff" },
        ],
    });

    // Thème sombre personnalisé
    const darkTheme = createTheme({
        theme: "dark",
        settings: {
            background: "#1a1a1a",
            foreground: "#bd93ff",
            caret: "#a67dff",
            selection: "#bd93ff40",
            lineHighlight: "#282828",
            gutterBackground: "#1a1a1a",
            gutterForeground: "#e0e0e0",
        },
        styles: [
            { tag: t.comment, color: "#a0a0a0" },
            { tag: t.variableName, color: "#6ddfcf" },
            { tag: [t.string, t.special(t.brace)], color: "#f8f8f8" },
            { tag: t.bool, color: "#bd93ff" },
            { tag: t.keyword, color: "#a67dff" },
            { tag: t.className, color: "#6ddfcf" },
            { tag: t.attributeName, color: "#a67dff" },
        ],
    });

    // Détecte le thème actuel (mode sombre ou clair)
    React.useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setIsDarkMode(isDark);

        // Observe les changements de thème (ex : via Tailwind ou système)
        const observer = new MutationObserver(() => {
            const dark = document.documentElement.classList.contains("dark");
            setIsDarkMode(dark);
        });
        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    // Charge l'extension de langage selon le nom passé en props
    const languageExtension = loadLanguage(language);

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-bold mb-2">
                {label}
            </label>
            <ReactCodeMirror
                value={value}
                onChange={onChange}
                height="300px"
                theme={isDarkMode ? darkTheme : lightTheme}
                extensions={languageExtension ? [languageExtension as Extension] : []}
                editable
                basicSetup={{
                    lineNumbers: true,
                    highlightActiveLine: true,
                }}
            />
        </div>
    );
};
