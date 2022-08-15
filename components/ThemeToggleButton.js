import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';

const ThemeToggleButton = () => {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
            style={{ display: 'inline-block' }}
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
            >theme</button>
        </motion.div>
    </AnimatePresence>
}

export default ThemeToggleButton
