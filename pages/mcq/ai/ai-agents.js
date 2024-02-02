import McqLayout from "../../../layouts/Mcqlayout";
import Head from "next/head";
function QuizApp() {
    const quizData = [
        {
            question: "Two literal are complementary of",
            options: [
                "They are equal",
                "They are identical but of opposite sign",
                "They are identical and of equal sign",
                "They are unequal but of equal sign"
            ],
            answer: "They are identical and of equal sign ",
        },
        {
            question: "In default logic, we allow inference rules of the form",
            options: [
                "(A:B)/C",
                "A/(B:C)",
                "A/B",
                "A/B:C"
            ],
            answer: "(A:B)/C",
        },
        {
            question: "Default reasoning is another type of ",
            options: [
                "Analogical reasoning",
                "Monotonic reasoning",
                "Bitnoic reasoning",
                "Non Monotonic reasoning"
            ],
            answer: "Non Monotonic reasoning",
        },
        {
            question: "The primitives in probabilistic reasoning are rando variabls",
            options: [
                "False",
                "False",
                "Nothing can be said",
                "None of the above"
            ],
            answer: "",
        },

    ];
    const optionLetters = [ 'A', 'B', 'C', 'D' ];
    return (
        <McqLayout>
            <Head>
                <title>AI agents mcq | Coding Tutorials</title>
                <meta name="description" content="Test your knowledge of artificial intelligence with our multiple choice questions. Improve your skills and understanding of artificial intelligence concepts." />
                <meta name="keywords" content="Artificial Intelligence, AI MCQs, AI concepts, AI algorithms, AI applications, " />
                <link rel="canonical" href="https://codingtutorials.in/mcq/ai/ai-agents" />
                <meta property="og:title" content="AI agents mcq | Coding Tutorials" />
                <meta property="og:description" content="Test your knowledge of artificial intelligence with our multiple choice questions. Improve your skills and understanding of artificial intelligence concepts." />
                <meta property="og:url" content="https://codingtutorials.in/mcq/ai/ai-agents" />
                <meta property="og:site_name" content="Coding Tutorials" />
                <meta property="og:image" content="https://codingtutorials.in/images/logo.png" />
                <meta property="og:image:secure_url" content="https://codingtutorials.in/images/logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Coding Tutorials" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="AI agents mcq | Coding Tutorials" />
                <meta name="twitter:description" content="Test your knowledge of artificial intelligence with our multiple choice questions. Improve your skills and understanding of artificial intelligence concepts." />
                <meta name="twitter:url" content="https://codingtutorials.in/mcq/ai/ai-agents" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://codingtutorials.in/images/logo.png" />
                <meta name="twitter:image:src" content="https://codingtutorials.in/images/logo.png" />
                <meta name="twitter:image:alt" content="Coding Tutorials" />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="630" />
            </Head>
            <section id="content-wrapper">
                <div className="quiz-app p-4">
                    <h2 className="  text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">AI Agents MCQ</h2>
                    { quizData.map( ( questionObj, index ) => (
                        <div className=" space-y-6 py-8 text-base leading-7 " key={ index }>
                            <p className="font-bold">Question :  { questionObj.question }</p>
                            <ul className="space-y-4">
                                { questionObj.options.map( ( option, optionIndex ) => (
                                    <li className="flex items-center" key={ optionIndex }>
                                        <div className=" h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 mr-3">
                                            <h1 className="mx-auto font-semibold bg-blue-700 rounded-full text-lg text-white text-center">{ optionLetters[ optionIndex ] }</h1>
                                        </div>
                                        { option }</li>
                                ) ) }
                            </ul>
                            <details className=" open:duration-300">
                                <summary className="px-5 py-3 text-lg cursor-pointer">Answer:</summary>
                                <div className=" px-5 py-3 border border-blue-700 text-sm">
                                    { questionObj.answer }
                                </div>
                            </details>
                        </div>
                    ) ) }
                </div>
            </section>
        </McqLayout>
    );
}

export default QuizApp;