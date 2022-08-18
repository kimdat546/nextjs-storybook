import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { Fonts } from '../components';
import { PrimaryLayout } from '../components/layouts';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }) => {
    return (
        <ThemeProvider
            defaultTheme="dark"
            attribute="data-theme"
            enableSystem={false}
            enableColorScheme={false}
            themes={['light', 'dark']}
        >
            <PrimaryLayout>
                <Fonts />
                <AnimatePresence
                    exitBeforeEnter
                    initial
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 });
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </PrimaryLayout>
        </ThemeProvider>
    );
};

export default MyApp;
