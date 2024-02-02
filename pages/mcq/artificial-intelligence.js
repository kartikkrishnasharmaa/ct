import McqLayout from "../../layouts/Mcqlayout";
import Head from "next/head";
import Link from "next/link";
const artificialintelligence = () => {
    const listData = [
        {
            title: "Artificial Intelligence History",
            link: "/mcq/ai/ai-history",
        },
        {
            title: "AI Agents",
            link: "/mcq/ai/ai-agents"
        }

    ];
    return (
        <McqLayout>
            <Head>
                <title>Artificial Intelligence Multiple Choice Question | Coding Tutorials</title>
                <meta name="description" content="Test your knowledge of artificial intelligence with our multiple choice questions. Improve your skills and understanding of artificial intelligence concepts." />
                <meta name="keywords" content="Artificial Intelligence, AI MCQs, AI concepts, AI algorithms, AI applications," />
                <link rel="canonical" href="https://codingtutorials.in/mcq/artificial-intelligence" />
                <meta property="og:title" content="Artificial intelligence Multiple Choice Question | Coding Tutorials" />
                <meta property="og:description" content="Test your knowledge of artificial intelligence with our multiple choice questions. Improve your skills and understanding of artificial intelligence concepts." />
                <meta property="og:url" content="https://codingtutorials.in/mcq/artificial-intelligence" />
                <meta property="og:site_name" content="Coding Tutorials" />
                <meta property="og:image" content="https://codingtutorials.in/images/logo.png" />
                <meta property="og:image:secure_url" content="https://codingtutorials.in/images/logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Coding Tutorials" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Artificial intelligence Multiple Choice Question | Coding Tutorials" />
                <meta name="twitter:description" content="Test your knowledge of artificial intelligence with our multiple choice questions. Improve your skills and understanding of artificial intelligence concepts." />
                <meta name="twitter:url" content="https://codingtutorials.in/mcq/artificial-intelligence" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://codingtutorials.in/images/logo.png" />
                <meta name="twitter:image:src" content="https://codingtutorials.in/images/logo.png" />
                <meta name="twitter:image:alt" content="Coding Tutorials" />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="630" />
            </Head>
            <section id="content-wrapper">
                <h1 className="title-font sm:text-4xl mt-5 text-center text-3xl mb-2 font-medium text-blue-700">Artificial Intelligence Multiple Choice Question</h1>

                <p className="text-xl mt-4">Certainly! Here is a list of Artificial Intelligence multiple-choice questions (MCQs) categorized based on different aspects:</p>


                <div className="pt-0 pr-4 pb-0 pl-4 mt-10 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8 border-b shadow-md shadow-cyan-600 hover:shadow-indigo-700">
                    <div className="pt--10 pr-0 pb-10 pl-0">
                        <p className="text-xl mt-3 font-bold text-center">Category Wise AI Mcq</p>
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
                                        <Link href={ listObj.link } className="btn ml-3  px-5 py-2">View</Link>
                                    </div>
                                </div>
                            </div>
                        ) ) }
                    </div>
                </div>

            </section>
        </McqLayout>
    );
};

export default artificialintelligence;