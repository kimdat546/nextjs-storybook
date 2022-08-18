import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = () => {
    const { theme } = useTheme();
    return (
        <div
            className="p-[0.5rem] fixed z-[2] backdrop-blur leading-[1.5] w-full flex justify-center top-0"
            style={{
                backgroundColor: theme === 'dark' ? '#20202380' : '#ffffff40'
            }}
        >
            <div className="max-w-[768px] flex w-full justify-between">
                <div className="flex items-center p-[0.5rem]">
                    <Image
                        src={`/images/footprint${
                            theme === 'dark' ? '-dark' : ''
                        }.png`}
                        alt=""
                        width={20}
                        height={20}
                    />
                    <span className="ml-[5px] text-primary font-[700] text-[18px]">
                        Nguyen Dat
                    </span>
                </div>
                <div className="flex items-center ml-[30px]">
                    <Link href="/">
                        <button
                            type="button"
                            className="text-primary p-[0.5rem]"
                        >
                            Work
                        </button>
                    </Link>
                    <Link href="/projects">
                        <button
                            type="button"
                            className="ml-[0.5rem] text-primary p-[0.5rem]"
                        >
                            Projects
                        </button>
                    </Link>
                    <Link href="/github">
                        <button
                            type="button"
                            className="ml-[0.5rem] text-primary p-[0.5rem]"
                        >
                            Github
                        </button>
                    </Link>
                </div>
                <ThemeToggleButton />
            </div>
        </div>
    );
};

export default Navbar;
