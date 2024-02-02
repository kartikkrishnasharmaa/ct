import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Sidebar = () => {
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
                    <h1 className="text-sm font-bold">Multiple Choice Question</h1>
                </div>
                <div className="font-semibold">
                    <ul className="sidebar-nav">
                        <li>
                            <Link href="/mcq">
                                <i className="fa fa-home" />
                                MCQ Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/artificial-intelligence">
                                Artificial Intelligence
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/angularjs-mcq">
                                Angular Js
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/blockchain">
                                Blockchain
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/mcq/c-language">
                                <i className="fa fa-home" />
                                C Language MCQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/cpp-language">
                                <i className="fa fa-home" />
                                C++ Language MCQ

                            </Link>
                        </li> */}

                        {/* <li>
                            <Link href="/mcq/io-device">
                                <i className="fa fa-home" />
                                Cloud Computing
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link href="/mcq/computer-fundamental">
                                <i className="fa fa-home" />
                                Computer Fundamental
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link href="/mcq/computer-memory">
                                <i className="fa fa-home" />
                                Computer Memory
                            </Link>
                        </li>*/}
                        <li>
                            <Link href="/mcq/data-structure-mcq">
                                <i className="fa fa-home" />
                                Data Structure MCQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/dbms-mcq">
                                DBMS MCQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/ethical-hacking-mcq">
                                Ethical Hacking
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/html-mcq">
                                Html MCQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/io-device">
                                <i className="fa fa-home" />
                                I/O Devices
                            </Link>
                        </li>

                        {/* <li>
                            <Link href="/mcq/java-mcq">
                                <i className="fa fa-home" />
                                Java Language MCQ

                            </Link>
                        </li> */}

                        {/*  <li>
                            <Link href="/mcq/javascript-mcq">
                                <i className="fa fa-home" />
                                Java Script MCQ

                            </Link>
                        </li> */}
                        <li>
                            <Link href="/mcq/networking-mcq">
                                Networking Mcq
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/node-mcq">
                                NodeJs MCQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/operating-system">
                                <i className="fa fa-home" />
                                Operating Systems
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/python-mcq">
                                Python MCQ
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/mcq/io-device">
                                <i className="fa fa-home" />
                                Software Engineering
                            </Link>
                        </li>
                        <li>
                            <Link href="/mcq/io-device">
                                <i className="fa fa-home" />
                                Theory of Computation
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link href="/mcq/react-mcq">
                                <i className="fa fa-home" />
                                React Js MCQ
                            </Link>
                        </li>*/}
                        <li>.</li>
                        <li>.</li>
                        <li>.</li>




                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
