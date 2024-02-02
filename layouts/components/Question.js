import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiQuestionnaireLine } from 'react-icons/ri';


const Question = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="w-full rounded-2xl px-4 py-4  mx-2 border-b shadow-md shadow-cyan-600 hover:shadow-indigo-700">
                    <div className="flex px-1 py-4">

                        <h3 className="font-bold text-primary flex text-2xl font-sans">Interview Question <span className='ml-2 mt-1 text-3xl'><RiQuestionnaireLine /></span> </h3>
                    </div>
                    <ul className="mx-auto grid m  grid-cols-2 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <Link href="/interview-question/reactjs" className="flex items-center flex-col">
                            <Image width="100" height="100" src="/images/reactjs.png" alt="" className="rounded-full w-16 h-16 object-cover" />
                            <h5 className="font-semibold mt-3">ReactJs</h5>
                        </Link>

                        <Link href="/interview-question/nodejs" className="flex items-center flex-col">
                            <Image width="100" height="100" src="/images/nodejs.png" alt="" className="rounded-full w-16 h-16 object-cover" />
                            <h5 className="font-semibold mt-3">NodeJs</h5>
                        </Link>
                        <Link href="/interview-question/nextjs" className="flex items-center flex-col">
                            <Image width="100" height="100" src="/images/nextjs.png" alt="" className="rounded-full w-16 h-16 object-cover" />
                            <h5 className="font-semibold mt-3">NextJs</h5>
                        </Link>
                        <Link href="/interview-question/python" className="flex items-center flex-col">
                            <Image width="100" height="100" src="/images/pythontu.png" alt="" className="rounded-full w-16 h-16 object-cover" />
                            <h5 className="font-semibold mt-3">Python</h5>
                        </Link>
                    </ul>
                </div>
            </div >
        </div>
    );
};

export default Question;