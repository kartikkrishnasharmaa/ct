import Image from 'next/image';
import Head from 'next/head';
import MainLayout from './MainLayout';
import Link from 'next/link';
import Job from '@layouts/components/Job';

const career = () => {
    return (
        <MainLayout>
            <Head>
                <title>Career | Coding Tutorials</title>
                <meta name="description" content="We are creating a new way of learning.A new way of understanding. And we're doing it together." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="Keywords" content="internship,job,mern stack,react js,HTML,coding tutorials.in,codingtutorials, coding tutorials, codingtutorials.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website" />

                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="336" />
                <meta property="og:image:height" content="128" />
                <meta property="og:title" content="Career Page | Coding Tutorials.in Free Online Tutorials" />
                <meta property="og:description" content="We are creating a new way of learning.A new way of understanding. And we're doing it together." />
                <link rel="icon" href="/favicon.ico" height="50px" width="70px" type="image/x-icon"></link>
            </Head>
            <section className="body-font">
                <div className="container mx-auto px-5 py-12 flex md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-700">Join Our Team</h1>
                        <p className="mb-8 m-2 leading-relaxed">We are creating a new way of learning.A new way of understanding. And we are doing it together. So if you are ready for a challenge,  we are ready for you. </p>
                    </div>

                </div>
            </section>
            <h1 className="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-blue-700">Our Five Step Recruit Process</h1>
            <div className=" w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="absolute h-full" style={ { left: "50 %" } }></div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold  text-lg text-white">1</h1>
                        </div>
                        <div className="order-1 bg-blue-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">Review</h3>
                            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">Applicants are reviewed to ensure a good fit.</p>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                        </div>
                        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">👋 Initial Interview</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">We want to get to know you better!
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Mini Project</h3>
                            <p className="text-sm leading-snug tracking-wide">A project for the team you are applying for is distributed.</p>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                        </div>
                        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">Final Interview</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">This Final interview is conducted with team lead.</p>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Career Launch</h3>
                            <p className="text-sm leading-snug tracking-wide">Blast off into the future of productivity and unlimited possibility !</p>
                        </div>
                    </div>
                </div>
            </div>
            <Job />
            <h3 className='title-font sm:text-xl text-center text-xl mt-3 mb-2 font-medium text-blue-700'>If you are interented to join us , Please send your resume at <b>codingtutorials.in@gmail.com</b></h3>
        </MainLayout>
    );
};

export default career;