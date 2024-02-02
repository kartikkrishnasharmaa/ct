import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const QueSidebar = () => {
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
                    <h1 className="text-sm font-bold">Question Answer</h1>
                </div>
                <div className="font-semibold">
                    <ul className="sidebar-nav">
                        <li>
                            <Link href="/interview-question">
                                <i className="fa fa-home" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/interview-question/mern-stack">
                                <i className="fa fa-home" />
                                MERN Stack Que Ans
                            </Link>
                        </li>

                        <li>
                            <Link href="/interview-question/nextjs">
                                <i className="fa fa-home" />
                                Next Js Que Ans
                            </Link>
                        </li>
                        <li>
                            <Link href="/interview-question/nodejs">
                                <i className="fa fa-home" />
                                Node Js Que Ans
                            </Link>
                        </li>
                        <li>
                            <Link href="/interview-question/python">
                                <i className="fa fa-home" />
                                Python Que Ans
                            </Link>
                        </li>
                        <li>
                            <Link href="/interview-question/reactjs">
                                <i className="fa fa-home" />
                                React Js Que Ans
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QueSidebar

