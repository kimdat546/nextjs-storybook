import { useTheme } from 'next-themes';
import Head from 'next/head';
import React from "react";

const Home = () => {
    const { themes, setTheme } = useTheme()
    return (
        <>
            <Head>
                <title>Portfolio from Nguyen Dat</title>
            </Head>
            <div>
                {themes.map(theme => {
                    return (
                        <button
                            type="button"
                            key={theme}
                            onClick={() => { return setTheme(theme) }}
                            className="font-[700] text-[30px] p-2 m-2 rounded-lg"
                        >
                            {theme}
                        </button>
                    )
                })}
            </div></>
    );
}

export default Home
