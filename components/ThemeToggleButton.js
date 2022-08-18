import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';
import { MoonAlt, SunLight } from './icons';

const ThemeToggleButton = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'flex', alignItems: 'center' }}
                key={theme}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <button
                    aria-label="Toggle theme"
                    type="button"
                    onClick={toggleTheme}
                    className="p-[0.5rem] rounded-[5px] w-[40px] h-[40px] flex items-center justify-center"
                    style={{
                        backgroundColor:
                            theme === 'dark' ? '#FBD38D' : '#805AD5',
                        color: theme === 'dark' ? '#333' : '#fff'
                    }}
                >
                    {theme === 'dark' ? (
                        <SunLight fontSize="20px" />
                    ) : (
                        <MoonAlt fontSize="20px" />
                    )}
                </button>
            </motion.div>
        </AnimatePresence>
    );
};

export default ThemeToggleButton;
