import React from 'react';
import Head from 'next/head';
import MainLayout from './MainLayout';

import Link from 'next/link';
const reporterror = () => {
    return (
        <MainLayout>
            <Head>
                <title>Report Error | Coding Tutorials</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Coding us" />
            </Head>
            <div className="flex w-full min-h-screen justify-center items-center">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-blue-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
                    <div className="flex flex-col space-y-8 justify-between">
                        <div>
                            <h1 className="font-bold text-4xl tracking-wide">Report Error</h1>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="inline-flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span>codingtutorials.in@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </Link>
                            <Link href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </Link>
                            <Link href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute  w-40 h-40 bg-indigo-400 rounded-full -right-28 -top-28"></div>
                        <div className="absolute  w-40 h-40 bg-indigo-400 rounded-full -left-28 -bottom-16"></div>
                        <div className="relative  bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                            <form className="flex flex-col space-y-4" action="">
                                <div>
                                    <label for="" className="text-sm">Name</label>
                                    <input type="text"
                                        placeholder="Name"
                                        className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300" />
                                </div>
                                <div>
                                    <label for="" className="text-sm">Email</label>
                                    <input type="email"
                                        placeholder="Email"
                                        className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300" />
                                </div>
                                <div>
                                    <label for="" className="text-sm">Message</label>
                                    <textarea placeholder="Message"
                                        rows="4"
                                        className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300"></textarea>
                                </div>
                                <button className="inline-block self-end bg-blue-700 font-bold rounded-lg px-6 py-4 uppercase text-sm text-white">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    );
};

export default reporterror;