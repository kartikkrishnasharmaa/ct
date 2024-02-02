import McqLayout from "../../layouts/Mcqlayout";
import Link from "next/link";
import Head from "next/head";
const dsmcq = () => {
    const listData = [
        {
            title: "Array & Stack",
            link: "/mcq/data-structure/array-stack",
        },
        {
            title: "Application of Stack",
            link: "/mcq/data-structure/stack-application",
        },
        {
            title: "Queue & Linked List",
            link: "/mcq/data-structure/queue",
        },
        {
            title: "Priority Queue &  Dequeue",
            link: "/mcq/data-structure/priority-queue-deque",
        },
        {
            title: "List Types",
            link: "/mcq/data-structure/list-types",
        },
        {
            title: "Binary Search Tree",
            link: "/mcq/data-structure/binary-search-tree",
        },
        {
            title: "AVL Tree",
            link: "/mcq/data-structure/avl-tree",
        },
        {
            title: "B Tree",
            link: "/mcq/data-structure/b-tree",
        },
        {
            title: "Hash Table",
            link: "/mcq/data-structure/hash-table",
        },
        {
            title: "Graph",
            link: "/mcq/data-structure/graph",
        },
        {
            title: "Heap",
            link: "/mcq/data-structure/heap",
        },
        {
            title: "Sorting",
            link: "/mcq/data-structure/sorting",
        },
        {
            title: "Searching",
            link: "/mcq/data-structure/searching",
        },
        {
            title: "Shortest Path",
            link: "/mcq/data-structure/shortest-path",
        },
        {
            title: "Recursion",
            link: "/mcq/data-structure/recursion",
        },
    ];
    return (
        <McqLayout>
            <Head>
                <title>Data Structure Multiple Choice Question | Coding Tutorials</title>
                <meta name="description" content="An Online place where you can write code and test your code in real time without installing any additional softwares." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="webiste template" />
            </Head>
            <section id="content-wrapper">
                <h1 className="title-font sm:text-4xl mt-5 text-center text-3xl mb-2 font-medium text-blue-700">Data Structure & Algorithm Multiple Choice Question</h1>

                <p className="text-xl mt-4">Certainly! Here is a list of Data Structure & Algorithm multiple-choice questions (MCQs) categorized based on different aspects:</p>


                <div className="pt-0 pr-4 pb-0 pl-4 mt-10 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8 border-b shadow-md shadow-cyan-600 hover:shadow-indigo-700">
                    <div className="pt--10 pr-0 pb-10 pl-0">
                        <p className="text-xl mt-3 font-bold text-center">Category Wise Mcq</p>
                        { listData.map( ( listObj, index ) => (
                            <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0" key={ index }>
                                <div className="flex">
                                    <div className="flex items-center flex-1">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-700 dark:text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <p className="text-lg font-bold">{ listObj.title }</p>
                                    </div>
                                    <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                                        <Link href={ listObj.link } className="btn ml-2 px-3 py-1">View</Link>
                                    </div>
                                </div>
                            </div>
                        ) ) }
                    </div>
                </div>

            </section>
        </McqLayout >
    );
};

export default dsmcq;