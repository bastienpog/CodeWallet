import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggle: () => void;
}

// Détermine le thème initial : 
// stocké dans localStorage sinon par défaut light
const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
    }
    return 'light';
};

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggle: () => { },
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    // Met à jour la classe sur <html> et stocke la préférence à chaque changement
    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Change le thème (light <-> dark)
    const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook personnalisé pour accéder au thème et à la fonction toggle
export const useCustomTheme = () => useContext(ThemeContext);
