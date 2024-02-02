import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const Mcq = () => {
    return (
        <section className="bg-sky-100 mt-10 dark:bg-darkmode-body body-font">
            <div className="container px-5 mx-auto">
                <div className="flex mb-2">
                    <h1 className='mt-4 text-xl text-primary dark:text-white font-bold mb-3'>Multiple Choice Question</h1>
                </div>

                <div className="mx-auto grid m  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 ">
                        <Link href="/mcq/html-mcq">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='border-gray-100 shadow-sm' src="/images/html.png" width="150" height="150" alt='html' />

                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2  text-base font-bold leading-normal uppercase text-white rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">HTML</button>
                            </div>
                        </Link>
                    </article>
                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-indigo-400 to-cyan-400">
                        <Link href="/mcq/dbms-mcq">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='border-gray-100 shadow-sm' src="/images/dbms.png" width="150" height="150" alt='dbms' />
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2  text-base font-bold leading-normal uppercase text-white rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">DBMS</button>
                            </div>
                        </Link>
                    </article>
                    <article className="rounded-2xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-pink-500 to-indigo-400 ">
                        <Link href="/mcq/networking-mcq">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='border-gray-100 shadow-sm' src="/images/networking.png" width="150" height="150" alt='networking' />
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2  text-base font-bold leading-normal uppercase text-white rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Networking</button>
                            </div>
                        </Link>
                    </article>

                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-red-500 to-orange-500">
                        <Link href="/mcq/python-mcq">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='border-gray-100 shadow-sm' src="/images/python.png" width="150" height="150" alt='python' />
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2  text-base font-bold leading-normal uppercase text-white rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Python</button>
                            </div>
                        </Link>
                    </article>
                </div>

            </div>
        </section>
    );
};

export default Mcq;