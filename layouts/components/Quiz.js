import Link from 'next/link';
import React from 'react';
const Quiz = () => {
    return (
        <div>
            <div className="pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
                <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8 border-b shadow-md shadow-cyan-600 hover:shadow-indigo-700">

                        <p className="text-xl font-bold text-center">Computer Science Online Quiz</p>

                        <div>
                            <div className="pt--10 pr-0 pb-10 pl-0">
                                <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                    <div className="flex">
                                        <div className="flex items-center flex-1">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-700 dark:text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <p className="text-lg font-bold">React Js Quiz</p>
                                        </div>
                                        <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                                            <Link href="/quiz/reactjs-quiz" className="btn ml-3  px-5 py-2">Test</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                    <div className="flex">
                                        <div className="flex items-center flex-1">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-700 dark:text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <p className="text-lg font-bold">Computer Networking</p>
                                        </div>
                                        <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0">
                                            <Link href="/quiz/networking-quiz" className="btn ml-3  px-5 py-2">Test</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;