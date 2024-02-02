import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Job = () => {
    return (
        <div>
            <div className="pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20 ">
                <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8 border-b shadow-md shadow-cyan-600 hover:shadow-indigo-700">
                        <div>
                            <p className="text-xl font-bold text-center">Open Positions</p>
                        </div>
                        <div>
                            <div className="pt--10 pr-0 pb-10 pl-0">
                                <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                    <div className="flex">
                                        <div className="flex items-center flex-1">
                                            <Image
                                                src="/images/reactjs.png" width={ 50 } height={ 50 } alt="" className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" />
                                            <div className="ml-4 min-w-0">
                                                <p className="text-lg font-bold">React Js Internship</p>
                                                <p className="text-md">Remote</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                                            <Link href="/jobs/react-js-developer" className="btn ml-3  px-5 py-2">Apply</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                    <div className="flex">
                                        <div className="flex items-center flex-1">
                                            <Image src="/images/pythontu.png" width={ 50 } height={ 50 } alt=""
                                                className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" />
                                            <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                                <p className="text-lg font-bold">Python Internship</p>
                                                <p className="text-md">Remote</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0">
                                            <Link href="/jobs/python-developer" className="btn ml-3  px-5 py-2">Apply</Link>
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

export default Job;