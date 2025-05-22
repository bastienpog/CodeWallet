import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextType {
    theme: Theme;
    toggle: () => void;
}

const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        if (storedTheme === 'light' || storedTheme === 'dark') {
            return storedTheme;
        }

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
    }
    return 'light';
};

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggle: () => { }
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggle = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    const value = {
        theme,
        toggle
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useCustomTheme = () => useContext(ThemeContext);