import PrimaryLayout from '../components/layouts/PrimaryLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
    return (
        <PrimaryLayout>
            <Component {...pageProps} key={router.route} />
        </PrimaryLayout>
    );
}

export default MyApp;
