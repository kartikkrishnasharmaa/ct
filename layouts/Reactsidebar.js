import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Reactsidebar = () => {
    const [ isOpen, setIsOpen ] = useState( false );

    const toggleSidebar = () => {
        setIsOpen( !isOpen );
    };

    return (
        <div className="relative" >
            <button
                className="fixed z-50 right-0 m-4 md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white lg:hidden"
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
                    <h1 className="text-xl font-bold">Learn ReactJs</h1>
                </div>
                <div className="font-semibold">
                    <ul className="sidebar-nav">
                        <li>
                            <Link href="/reactjs">
                                <i className="fa fa-home" />
                                ReactJs Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/reactjs">
                                ReactJs Introduction
                            </Link>
                        </li>
                        <li>
                            <Link href="/reactjs">
                                Environment Setup
                            </Link>
                        </li>
                        <li>
                            <Link href="/reactjs">
                                ReactJs JSX
                            </Link>
                        </li>
                        <li>
                            <Link href="/reactjs">
                                ReactJs Components
                            </Link>
                        </li>
                        <li>
                            <Link href="/reactjs">
                                ReactJs State
                            </Link>
                        </li>
                        <li>
                            <Link href="/reactjs">
                                ReactJs Props
                            </Link>
                        </li>
                        <li>
                            <Link href="/reactjs">
                                ReactJs Events
                            </Link>
                        </li>
                        <li>
                            <Link href="/reactjs">
                                ReactJs Forms
                            </Link>
                        </li>
                        <li>
                            <Link href="/reactjs">
                                ReactJs Router
                            </Link>
                        </li>
                        <li>
                            <Link href="/reactjs">
                                ReactJs Flux
                            </Link>
                        </li>
                        <li>
                            <Link href="/reactjs">
                                ReactJs Redux
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Reactsidebar;
