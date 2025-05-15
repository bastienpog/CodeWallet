import { Sun, Moon } from 'lucide-react';
import { useCustomTheme } from './ThemeProvider';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const { theme, toggle } = useCustomTheme();

    return (
        <div className="flex items-center justify-between p-4 border-b border-purple-500 bg-white text-black dark:bg-custom-black dark:text-white">
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="48" viewBox="0 0 52 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="48" height="20" x="2" y="2" rx="2" stroke="#9A48D0" strokeWidth="2" />
                    <circle cx="10" cy="8" r="2" stroke="#7BC950" strokeWidth="2" />
                    <path d="M11.414 9.414 14 12" stroke="#7BC950" strokeWidth="2" />
                    <path d="M16.8 14.8 20 18" stroke="#7BC950" strokeWidth="2" />
                    <circle cx="10" cy="16" r="2" stroke="#7BC950" strokeWidth="2" />
                    <path d="m20 6-8.586 8.586" stroke="#7BC950" strokeWidth="2" />
                    <polyline points="36 18 42 12 36 6" stroke="#7BC950" strokeWidth="2" />
                    <polyline points="28 6 22 12 28 18" stroke="#7BC950" strokeWidth="2" />
                </svg>
                <span className='text-2xl text-custom-violet2 font-black'>CodeWallet</span>
            </div>
            <div className="flex items-center space-x-6">
                <Link to={"/"} className="hover:underline">fragment</Link>
                <a href="#" className="hover:underline">info</a>
                <button
                    onClick={toggle}
                    title="Toggle color scheme"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-custom-violet2"
                >
                    {theme === 'dark' ? <Sun size={20} className="text-custom-violet2" /> : <Moon size={20} className="text-custom-violet2" />}
                </button>
            </div>
        </div>
    );
};

