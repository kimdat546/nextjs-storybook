import { useTheme } from 'next-themes';
import Head from 'next/head';
import React from 'react';

const Home = () => {
    const { theme } = useTheme();
    return (
        <>
            <Head>
                <title>Portfolio from Nguyen Dat</title>
            </Head>
            <div className="max-w-[80%] m-auto py-[30px]">
                <div
                    className="text-primary rounded-[0.5rem] mb-[1.5rem] p-[0.75rem] text-center"
                    style={{
                        backgroundColor:
                            theme === 'dark'
                                ? 'rgba(255, 255, 255, 0.08)'
                                : 'rgba(255, 255, 255, 0.36)'
                    }}
                >
                    Hello, I&#39;m a full stack developer.
                </div>
            </div>
        </>
    );
};

export default Home;
