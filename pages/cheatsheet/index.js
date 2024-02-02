import Cheatlayout from "../../layouts/Cheatlayout";
import Head from "next/head";
import Link from 'next/link';
import React, { useState } from 'react';

export default function Home() {
    const courses = [
        { id: 1, name: 'MongoDB', category: 'Database', link: "/cheatsheet/mongodb-cheatsheet" },
        { id: 2, name: 'JavaScript', category: 'Programming', link: "/cheatsheet/javascript-cheatsheet" },
        { id: 3, name: 'Google Chrome', category: 'Shortcut', link: "/cheatsheet/google-chrome-shortcut" },
        { id: 4, name: 'C++', category: 'Programming', link: "/cheatsheet/cpp-cheatsheet" },
        { id: 5, name: 'Youtube', category: 'Shortcut', link: "/cheatsheet/youtube-cheatsheet" },

    ];
    const [ selectedCategory, setSelectedCategory ] = useState( 'All' );

    const handleCategoryChange = ( category ) => {
        setSelectedCategory( category );
    };

    const filteredCourses = selectedCategory === 'All'
        ? courses
        : courses.filter( course => course.category === selectedCategory );

    return <Cheatlayout>
        <Head>
            <title>Quick CheatSheet for programmers  | Coding Tutorials</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Quick CheatSheet for programmers " />
        </Head>
        <section className="lg:ml-36">
            <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="container mx-auto mt-4">
                    <h2 className=" text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">Quick CheatSheet for Programmers </h2>

                    <p className="mt-7 text-base">It is a concise and handy tool designed to assist programmers in their day-to-day coding tasks. It provides a condensed collection of essential information, syntax, commands, and best practices for various programming languages, libraries, frameworks, and tools.</p>
                    <p className="mt-2">These cheatsheets serve as quick guides that programmers can refer to when they need a rapid reminder or clarification on specific coding concepts, functions, or techniques. </p>

                </div>
                <div className="mt-14">
                    <div className='text-center space-x-2'>
                        <button
                            className={ `font-bold py-2 px-4 rounded-full ${selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}` }
                            onClick={ () => handleCategoryChange( 'All' ) }
                        >
                            All
                        </button>
                        <button
                            className={ `font-bold py-2 px-4 rounded-full ${selectedCategory === 'Programming' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}` }
                            onClick={ () => handleCategoryChange( 'Programming' ) }
                        >
                            Programming
                        </button>
                        <button
                            className={ `font-bold py-2 px-4 rounded-full ${selectedCategory === 'Database' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}` }
                            onClick={ () => handleCategoryChange( 'Database' ) }
                        >
                            Database
                        </button>
                        <button
                            className={ `font-bold py-2 px-4 rounded-full ${selectedCategory === 'Shortcut' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}` }
                            onClick={ () => handleCategoryChange( 'Shortcut' ) }
                        >
                            Shortcuts
                        </button>

                    </div>
                    { selectedCategory && <p className='ml-8 mt-4 text-2xl sm:text-xl'>{ selectedCategory } Cheat Sheet</p> }
                    <div className="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        { filteredCourses.map( course => (
                            <div key={ course.id }>
                                <Link href={ course.link }>
                                    <article className="rounded-xl bg-white py-2 mx-auto text-center shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500">
                                        <h2 className="text-base text-white font-semibold mb-4">{ course.name }</h2>
                                    </article>
                                </Link>
                            </div>
                        ) ) }
                    </div>
                </div>

            </div>
        </section>
    </Cheatlayout>;
}