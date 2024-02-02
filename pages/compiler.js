import MainLayout from './MainLayout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
const compiler = () => {
    return (
        <MainLayout>
            <Head>
                <title>Online Compiler - Run code online | Coding Tutorials.in</title>
                <meta name="description" content="Are you looking for a way to reach thousands of coding enthusiasts who are eager to learn new skills and technologies." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="Keywords" content="HTML,coding tutorials.in,codingtutorials, coding tutorials, codingtutorials.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website" />

                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="336" />
                <meta property="og:image:height" content="128" />
                <meta property="og:title" content="Advertise with us | Coding Tutorials.in Free Online Tutorials" />
                <meta property="og:description" content="Are you looking for a way to reach thousands of coding enthusiasts who are eager to learn new skills and technologies" />
                <link rel="icon" href="/favicon.ico" height="50px" width="70px" type="image/x-icon"></link>
            </Head>
            <div>

                <div className="container mx-auto px-5 py-12 flex md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded" alt="learning" width={ 350 } height={ 300 } src="/images/learning.png" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-700">Run Code Online</h1>
                        <p>Practice while learning is the best way to learn. Here you will find a HTML Editor, JS Playground, Color Picker, and many other tools that you can play with to extend your learning.</p>
                    </div>
                </div>

                <div className="mx-auto grid m  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 ">
                        <Link href="/Editor/html/html-editor.html">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='border-gray-100 shadow-sm' src="/images/html.png" width="150" height="150" alt='html' />

                            </div>
                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2  text-base font-bold leading-normal uppercase text-white rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">HTML</button>
                            </div>
                        </Link>
                    </article>
                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-indigo-400 to-cyan-400">
                        <Link href="/Editor/css/css-editor.html">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='border-gray-100 shadow-sm' src="/images/css.png" width="90" height="90" alt='css' />
                            </div>

                            <div className="mt-5">
                                <button className="w-full inline-block px-6 py-2 border-2  text-base font-bold leading-normal uppercase text-white rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">CSS</button>
                            </div>
                        </Link>
                    </article>

                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-red-500 to-orange-500">
                        <Link href="/Editor/javascript/js-editor.html">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='border-gray-100 shadow-sm' src="/images/js.png" width="150" height="150" alt='js' />
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2  text-base font-bold leading-normal uppercase text-white rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">JavaScript</button>
                            </div>
                        </Link>
                    </article>
                </div>

            </div>
        </MainLayout>
    );
};

export default compiler;