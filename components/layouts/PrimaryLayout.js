import Head from 'next/head';
import NavBar from '../NavBar';

const PrimaryLayout = ({ children }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="Portfolio from Nguyen Dat" />
                <meta name="author" content="Portfolio from Nguyen Dat" />
                <meta name="author" content="kimdat546" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:title" content="kimdat546" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@kimdat546" />
                <meta name="twitter:creator" content="@kimdat546" />
                <meta name="twitter:image" content="/card.png" />
                <meta property="og:site_name" content="kimdat546" />
                <meta name="og:title" content="kimdat546" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" />
            </Head>
            <NavBar />
            <div className="max-w-[768px] mx-auto mt-[60px]">
                {children}
            </div>
        </>
    );
};

export default PrimaryLayout;
