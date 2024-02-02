import Cheatlayout from "../../layouts/Cheatlayout";
import Head from "next/head";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default function Home() {
    return <Cheatlayout>
        <Head>
            <title>Python Cheat Sheet | Coding Tutorials</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Python Cheat Sheet | Coding Tutorials" />
        </Head>
        <section className="lg:ml-36">
            <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="container mx-auto mt-4">
                    <h2 className=" text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">Python Cheat Sheet </h2>
                    <p className="mt-7"> Here is Python quick reference code snippets which is useful for developers.</p>

                    <p className=" text-primary dark:text-white text-xl mt-8 font-bold text-center sm:text-xl  xl:text-2xl dark:text-blue">Basic Introduction </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 box-border rounded-2xl w-full p-1 mt-6 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700">

                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Hello world </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="Python" style={ a11yDark }>
                                { `#include <iostream>
using namespace std;
int main()
{
 cout << "Hello World!";
 return 0;
}


Output: Hello World!`}
                            </SyntaxHighlighter>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </Cheatlayout>;
}