import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Htmlsidebar = () => {
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
                    <h1 className="text-sm font-bold">Learn HTML</h1>
                </div>
                <div className="font-semibold">
                    <ul className="sidebar-nav">
                        <li>
                            <Link href="/html">
                                <i className="fa fa-home" />
                                HTML Home
                            </Link>
                        </li>
                        <li>
                            <Link href="../html/html-introduction">
                                HTML Introduction
                            </Link>
                        </li>
                        <li>
                            <Link href="../html/html-setup">
                                HTML Setup
                            </Link>
                        </li>
                        <li>
                            <Link href="../html/html-heading">
                                HTML Heading
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-element">
                                HTML Element
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-text-formatting">
                                HTML Text
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-line-break">
                                HTML Line Break
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-paragraph">
                                HTML Paragraph
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-comment">
                                HTML Comment
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-link-and-url">
                                HTML Link & URL
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-table">
                                HTML Tables
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-image">
                                HTML Image
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-color">
                                HTML Color
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-form">
                                HTML Form
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-intractive-element">
                                HTML Intractive Element
                            </Link>
                        </li>   <li>
                            <Link href="../html/html-list">
                                HTML List
                            </Link>
                        </li><li>
                            <Link href="../html/html-styles">
                                HTML Style
                            </Link>
                        </li><li>
                            <Link href="../html/html-favicon">
                                HTML Favicon
                            </Link>
                        </li><li>
                            <Link href="../html/html-semantics">
                                HTML Semantics
                            </Link>
                        </li><li>
                            <Link href="../html/html-symbol">
                                HTML Symbol
                            </Link>
                        </li>
                        <li>
                            <Link href="../html/html-emoji">
                                HTML Emoji
                            </Link>
                        </li>
                        <li className="active font-bold text-blue-700">
                            HTML Multimedia
                        </li>
                        <li>
                            <Link href="../html/html-audio">
                                HTML Audio
                            </Link>
                        </li>
                        <li>
                            <Link href="../html/html-video">
                                HTML Video
                            </Link>
                        </li>   <li>
                            <Link href="../html/html-canvas">
                                HTML Canvas
                            </Link>
                        </li>
                        <li>
                            <Link href="../html/html-youtube">
                                HTML Youtube
                            </Link>
                        </li>
                        <li className="active font-bold text-blue-700">
                            Advanced HTML 5
                        </li>
                        <li>
                            <Link href="../html/html-editable-content">
                                Editable Content
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-spelling-mistake">
                                Check Spelling Mistake
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-client-side-storage">
                                Client Side Storage
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-drag-drop-feature">
                                Drag & Drop Feature
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-desktop-notification">
                                Desktop Notification
                            </Link>
                        </li>  <li>
                            <Link href="../html/html-2d-and-3d-graphics">
                                2D & 3D Graphics
                            </Link>
                        </li>
                        <li>
                            <Link href="../html/html-geolocation-api">
                                Geolocation API
                            </Link>
                        </li>
                        <li></li>
                        <li>.</li>
                        <li>.</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Htmlsidebar;
