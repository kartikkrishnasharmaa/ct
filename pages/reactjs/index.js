import ReactLayout from "../../layouts/Reactlayout";
import Head from "next/head";
import Link from 'next/link';
import Accordion from "../../layouts/shortcodes/Accordion";
export default function Home() {
    return <ReactLayout>
        <Head>
            <title>Learn Reactjs tutorials | Coding Tutorials</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="webiste template" />
        </Head>

        <section className="lg:ml-36">
            <div className="lg:w-4/5 sm:mx-auto sm:mb-2 mx-2">
                <div className="text-center mx-auto mt-4 flex-col items-center">
                    <div className="lg:flex-grow lg:pr-24 flex flex-col items-center text-center">
                        <div className="relative">
                            <h2 className=" text-blue-700 text-4xl text-center sm:text-xl md:text-2xl md:w-auto lg:w-auto lg:text-left xl:text-5xl dark:text-blue">Learn React Js</h2> <br className="lg:block hidden" />
                            <p className="lg:block hidden text-gray-600 dark:text-gray-400 text-xl text-center sm:text-sm md:text-base lg:text-left xl:text-xl">React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
                        </div>

                    </div>
                </div>


                <h5 className="mt-7">Audience</h5>
                <p className="mt-2">This tutorial will help JavaScript developers who look ahead to deal with ReactJS for the first time. We will try to introduce every concept by showing simple examples that can be easily understood. Having a knowledge of JavaScript and HTML is required.</p>

                <p className="mt-2">This tutorial will give you enough understanding on various functionalities of ReactJS with suitable examples.</p>


                <h5 className="mt-9">Prerequisites</h5>

                <p className="mt-2">Before proceeding with this tutorial, you should have a basic understanding of HTML, CSS, JavaScript, and Document Object Model (DOM).</p>
                <div className="mt-10">
                    <p className="mt-9 mb-8 text-center text-2xl">ReactJS - Index</p>
                    <Accordion title="Why should you need to do this ?">

                        - This is a thing.

                    </Accordion>
                    <Accordion title=" examples" className="mt-2">

                        - This is a thing.

                    </Accordion>
                </div>
            </div>
        </section>

    </ReactLayout>;
}

