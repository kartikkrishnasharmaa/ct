import React from 'react';
import Quiz from "../../layouts/Quizlayout";
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const quiz = () => {
    return (
        <Quiz>
            <Head>
                <title>Computer Science free Online Quiz | Coding Tutorials</title>
                <meta name="description" content="Test Your Knowledge with our Computer Science Free Online Quiz | Challenge Yourself with Engaging Questions | Improve Your Computer Science Skills | Interactive Quizzes for Beginners and Enthusiasts" />
                <meta name="keywords" content="computer science,computer quiz,quiz,science quiz,computer gk,computer,computer quiz questions,computer questions and answers,computer science quiz game,computer science quiz online,basic computer quiz,computer quiz for children,computer science quiz online test,computer science quiz competition,computer science quiz with answers,computer quiz for class 2,computer mcq,computer science quiz questions with answers,computer quiz for competitive exams" />
                <link rel="canonical" href="https://codingtutorials.in/quiz" />
                <meta property="og:title" content="Computer Science free Online Quiz | Coding Tutorials" />
                <meta property="og:description" content="Test Your Knowledge with our Computer Science Free Online Quiz | Challenge Yourself with Engaging Questions | Improve Your Computer Science Skills | Interactive Quizzes for Beginners and Enthusiasts" />
                <meta property="og:url" content="https://codingtutorials.in/quiz" />
                <meta property="og:site_name" content="Coding Tutorials" />
                <meta property="og:image" content="https://codingtutorials.in/images/logo.png" />
                <meta property="og:image:secure_url" content="https://codingtutorials.in/images/logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Coding Tutorials" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Computer Science free Online Quiz | Coding Tutorials" />
                <meta name="twitter:description" content="Test Your Knowledge with our Computer Science Free Online Quiz | Challenge Yourself with Engaging Questions | Improve Your Computer Science Skills | Interactive Quizzes for Beginners and Enthusiasts" />
                <meta name="twitter:url" content="https://codingtutorials.in/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://codingtutorials.in/" />
                <meta name="twitter:image:src" content="https://codingtutorials.in/images/logo.png" />
                <meta name="twitter:image:alt" content="Coding Tutorials" />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="630" />
            </Head>
            <section id="content-wrapper">
                <h1 className='title-font p-2 sm:text-4xl text-center text-2xl mb-10 font-medium text-blue-700'>Computer Science Online Quiz | Coding Tutorials.in</h1>
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    <Image src="/images/content.png" alt="about" width={ 200 } height={ 50 } />
                    <div className="md:w-3/5 md:pl-6">
                        <p className="title-font text-lg"> Explore our online computer science quizzes if you are interested in pursuing a career in this dynamic and expanding field. The demand for programmers and researchers in computer science is rapidly increasing, making it an exciting path to follow. Whether you are aiming to build a career in this domain or simply looking to refresh your foundational knowledge, our quizzes can be a valuable resource.</p>
                    </div>
                </div>
                <div className="box-border rounded-2xl w-auto p-10 m-6 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700">

                    <div className="mx-auto grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                        <Link href="/quiz/networking-quiz">
                            <article className="rounded-xl text-center bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500">
                                <h2 className="text-xl text-white font-semibold mb-4">Networking</h2>
                            </article>
                        </Link>
                        <Link href="/quiz/reactjs-quiz">
                            <article className="rounded-xl text-center bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500">
                                <h2 className="text-xl text-white font-semibold mb-4">React Js</h2>
                            </article>
                        </Link>

                    </div>
                </div>

            </section>
        </Quiz>
    );
};

export default quiz;