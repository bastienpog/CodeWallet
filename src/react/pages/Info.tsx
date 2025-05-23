import { CustomThemeProvider } from '../components/ThemeProvider';
import { Navbar } from '../components/Navbar';
import { Code, FileCode, Tag, Book, Clipboard, GitBranch, Settings, Download } from 'lucide-react';

export const Info = () => {
    return (
        <CustomThemeProvider>
            <div className="min-h-screen bg-white text-black dark:bg-custom-black dark:text-white font-montserrat">
                <Navbar />
                <div className="max-w-4xl mx-auto px-6 py-10">

                    {/* Overview Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-white dark:bg-custom-black p-2 rounded-md">
                                <FileCode size={32} className="text-custom-violet2" />
                            </div>
                            <h2 className="text-3xl font-bold">Overview</h2>
                        </div>
                        <div className="bg-custom-violet1 rounded-xl p-6">
                            <p className="text-white">
                                Code Wallet is designed for developers who often reuse small pieces of code. It simplifies snippet management with tags, syntax highlighting, and offline access.
                            </p>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Overview Highlights */}
                                <div className="flex items-start gap-3 bg-white dark:bg-custom-black p-4 rounded-lg">
                                    <Book className="text-custom-violet2 mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <h3 className="font-semibold text-custom-violet2">Personal Code Library</h3>
                                        <p className="text-sm text-black dark:text-white">Quickly create, edit, and copy your favorite code snippets</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white dark:bg-custom-black p-4 rounded-lg">
                                    <Tag className="text-custom-violet2 mt-1" size={20} />
                                    <div>
                                        <h3 className="font-semibold text-custom-violet2">Organized Structure</h3>
                                        <p className="text-sm text-black dark:text-white">Easily tag and categorize your snippets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <Settings size={24} className="text-custom-violet2" />
                            <h2 className="text-3xl font-bold">Used Technologies</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-custom-violet2">Frontend</h3>
                                <ul className="space-y-2 text-black dark:text-white">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                        React + TypeScript
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                        Vite
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                        TailwindCSS
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-custom-violet2">Core Tech</h3>
                                <ul className="space-y-2 text-black dark:text-white">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                        Electron.js
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                        Highlight.js / CodeMirror
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                        Local JSON storage
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-custom-violet2">Quality & Design</h3>
                                <ul className="space-y-2 text-black dark:text-white">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                        Jest + React Testing Library
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                        Montserrat Typography
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                        Responsive UI
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <GitBranch size={24} className="text-custom-violet2" />
                            <h2 className="text-3xl font-bold">Key Features</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-custom-violet1 p-6 rounded-xl text-white">
                                <div className="mb-4">
                                    <Code size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl text-white font-bold mb-2">Powerful Snippet Management</h3>
                                <p>
                                    Easily create, edit, delete, and categorize. Version history included.
                                </p>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        Multi-language support
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        Custom categorization
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        Rich formatting
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-custom-violet1 p-6 rounded-xl text-white">
                                <div className="mb-4">
                                    <Clipboard size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Seamless Code Integration</h3>
                                <p>
                                    One-click copy and syntax highlighting in 30+ languages.
                                </p>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        Automatic language detection
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        Code formatting
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        Keyboard shortcuts
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-custom-violet1 p-6 rounded-xl text-white">
                                <div className="mb-4">
                                    <Download size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Privacy Friendly</h3>
                                <p>
                                    Data stored locally, no internet connection required. Optional encryption available.
                                </p>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        Offline-first architecture
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        Local storage
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        Optional backup/restore
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* UI Design Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <Settings size={24} className="text-custom-violet2" />
                            <h2 className="text-3xl font-bold">Interface Design</h2>
                        </div>
                        <div className="p-6 rounded-xl">
                            <p className="text-black dark:text-white mb-6">
                                Minimal interface for distraction-free work, with intuitive navigation and optimized readability.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-custom-violet2">Color Palette</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-md bg-white border border-gray-200"></div>
                                            <div>
                                                <p className="font-medium">Light background</p>
                                                <p className="text-sm text-gray-500">#FFFFFF</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-md bg-custom-black border dark:border-gray-500"></div>
                                            <div>
                                                <p className="font-medium">Dark background</p>
                                                <p className="text-sm text-gray-500">#333333</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-md bg-custom-violet1"></div>
                                            <div>
                                                <p className="font-medium">Primary</p>
                                                <p className="text-sm text-gray-500">#B288C0</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-md bg-custom-violet2"></div>
                                            <div>
                                                <p className="font-medium">Accent 1</p>
                                                <p className="text-sm text-gray-500">#9A48D0</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-md bg-custom-green"></div>
                                            <div>
                                                <p className="font-medium">Accent 2</p>
                                                <p className="text-sm text-gray-500">#7BC950</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-custom-violet2">Design Principles</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="bg-white dark:bg-custom-black p-1.5 rounded-md mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                            </div>
                                            <div>
                                                <p className="font-medium">Minimalist interface</p>
                                                <p className="text-sm text-black dark:text-white">Focus on content</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-white dark:bg-custom-black p-1.5 rounded-md mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                            </div>
                                            <div>
                                                <p className="font-medium">Intuitive navigation</p>
                                                <p className="text-sm text-black dark:text-white">Quick access to functions</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-white dark:bg-custom-black p-1.5 rounded-md mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-custom-violet2"></div>
                                            </div>
                                            <div>
                                                <p className="font-medium">Optimized readability</p>
                                                <p className="text-sm text-black dark:text-white">Clear typography</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </CustomThemeProvider>
    );
};
