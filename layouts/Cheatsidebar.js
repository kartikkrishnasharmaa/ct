import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Cheatsidebar = () => {
    const [ isOpen, setIsOpen ] = useState( false );

    const toggleSidebar = () => {
        setIsOpen( !isOpen );
    };

    return (
        <div className="relative" >
            <button
                className="fixed z-50 right-0 m-4 md:hidden rounded"
                onClick={ toggleSidebar } style={ {
                    marginTop: "130px",
                    fontSize: "20px",
                } }
            >
                { isOpen ? <MdClose /> : <RxHamburgerMenu /> }
            </button>
            <div className={ `fixed top-0 left-0 z-50 h-full bg-white dark:bg-darkmode-body transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-2/4` } style={ {
                marginTop: "130px",
                width: "220px",
                overflowY: "scroll"
            } }>
                <div className="flex justify-between items-center m-1">
                    <h1 className="text-sm font-bold">Developer CheatSheet</h1>
                </div>
                <div className="font-semibold">
                    <ul className="sidebar-nav">
                        <li>
                            <Link href="/cheatsheet">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/cheatsheet/cpp-cheatsheet">
                                C++
                            </Link>
                        </li>
                        <li>
                            <Link href="/cheatsheet/google-chrome-shortcut">
                                Google Chrome
                            </Link>
                        </li>
                        <li>
                            <Link href="/cheatsheet/javascript-cheatsheet">
                                JavaScript
                            </Link>
                        </li>
                        <li>
                            <Link href="/cheatsheet/mongodb-cheatsheet">
                                MongoDB
                            </Link>
                        </li>
                        <li>
                            <Link href="/cheatsheet/youtube-cheatsheet">
                                Youtube
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cheatsidebar;
