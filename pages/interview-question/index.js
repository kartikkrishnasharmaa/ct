import QueLayout from "../../layouts/QueLayout";
import Head from "next/head";
import Link from 'next/link';

export default function Home() {
    return <QueLayout>
        <Head>
            <title>Free Interview Preparation | Coding Tutorials</title>
            <meta name="description" content="An Online place where you can write code and test your code in real time without installing any additional softwares." />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="webiste template" />
        </Head>
        <section id="content-wrapper">

            <div className="row">
                <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                    <div className="container mx-auto mt-4 flex-col">
                        <div className="lg:pr-24 flex flex-col">

                            <h2 className=" text-blue-700 text-4xl text-center sm:text-xl md:text-2xl md:w-auto lg:w-auto lg:text-left xl:text-5xl dark:text-white">Interview Preparation</h2>
                            <br className="lg:block hidden" />

                            <p className="mt-2">Here are some common interview questions and their answers for various topics. Each topic has a minimum of 20 questions that cover the most important aspects of the subject. The answers are concise and professional, and they demonstrate your knowledge and skills in the relevant field. </p>
                        </div>
                    </div>
                    <div className="box-border rounded-2xl w-auto p-10 m-6 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700">
                        <h1 className='sm:text-2xl text-center text-base mb-10 font-medium text-blue-700'>Find common interview question by Top Company </h1>
                        <div className="mx-auto grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                            <Link href="/interview-question/amazon-most-asked-interview-questions">
                                <article className="rounded-xl text-center bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500">
                                    <h2 className="text-xl text-white font-semibold mb-4">Amazon</h2>
                                </article>
                            </Link>
                            <Link href="/interview-question/tcs-most-asked-interview-questions">
                                <article className="rounded-xl text-center bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500">
                                    <h2 className="text-xl text-white font-semibold mb-4">TCS</h2>
                                </article>
                            </Link>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 box-border rounded-2xl w-auto p-10 m-6 border-1 shadow-sm shadow-cyan-600 hover:shadow-indigo-700">
                        <div className="p-2 w-full ">
                            <Link href="/interview-question/mern-stack">
                                <div className="rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-700 dark:text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">MERN Stack Question</span>
                                </div>
                            </Link>
                        </div>
                        <div className="p-2 w-full">
                            <Link href="/interview-question/nextjs">
                                <div className="rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-700 dark:text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Next Js Question</span>
                                </div>
                            </Link>
                        </div>
                        <div className="p-2 w-full">
                            <Link href="/interview-question/nodejs">
                                <div className="rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-700 dark:text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Node Js Question</span>
                                </div>
                            </Link>
                        </div>

                        <div className="p-2 w-full">
                            <Link href="/interview-question/python">
                                <div className="rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-700 dark:text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Python Question</span>
                                </div>
                            </Link>
                        </div>
                        <div className="p-2 w-full">
                            <Link href="/interview-question/reactjs">
                                <div className="rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-700 dark:text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">React Js Question</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </QueLayout>;
}