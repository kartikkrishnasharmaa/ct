import Head from 'next/head';
import Examplelayout from "../layouts/Examplelayout";
import Link from 'next/link';
const Program = () => {
    return (
        <Examplelayout>
            <Head>
                <title>Programming Language Examples | Coding Tutorials</title>
                <meta name="description" content="An Online place where you can write code and test your code in real time without installing any additional softwares." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="privacy policy" />
            </Head>
            <section className="lg:ml-36">
                <div className="row">
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="box-border rounded-2xl h-full w-full p-10 m-6 border-1 shadow-xl shadow-cyan-600 hover:shadow-indigo-700">
                            <h1 className='title-font sm:text-4xl text-center text-3xl mb-10 font-medium text-blue-700'> Programming  Examples </h1>
                            <p className="mb-8 leading-relaxed">The best way to learn programming is to practice. You are advised to take the references from these examples and try them on your own.  </p>
                            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                                <Link href="/c-example">
                                    <article className="rounded-xl text-center bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500">
                                        <h2 className="text-xl text-white font-semibold mb-4">C Programs</h2>
                                    </article>
                                </Link>
                                {/* <Link href="/cpp-example">
                                    <article className="rounded-xl text-center bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500">
                                        <h2 className="text-xl text-white font-semibold mb-4">C++ Programs</h2>
                                    </article>
                                </Link>
                                <Link href="/java-example">
                                    <article className="rounded-xl text-center bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500">
                                        <h2 className="text-xl text-white font-semibold mb-4">Java Programs</h2>
                                    </article>
                                </Link>
                                <Link href="/python-example">
                                    <article className="rounded-xl text-center bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500">
                                        <h2 className="text-xl text-white font-semibold mb-4">Python Programs</h2>
                                    </article>
                                </Link> */}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Examplelayout>
    );
};

export default Program;