import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FragmentButton } from './components/FragmentButton';
import { FragmentList } from './components/FragmentList';
import { CustomThemeProvider } from './components/ThemeProvider';

export const App = () => {

  return (
    <CustomThemeProvider>
      <div className="min-h-screen bg-white text-black dark:bg-custom-black dark:text-white">
        <Navbar />
        <FragmentButton />
        <FragmentList />
      </div>
    </CustomThemeProvider>
  );
}


