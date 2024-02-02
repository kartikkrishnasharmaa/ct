import McqLayout from "../../../layouts/Mcqlayout";

function QuizApp() {
    const quizData = [
        {
            question: " A binary tree is rooted tree but not an ordered tree",
            options: [
                "True",
                "False",
                "Nothing can be said",
                "None of the above",
            ],
            answer: "False",
        },
        {
            question: "How many common operations are performed in a binary tree ?",
            options: [
                "5",
                "2",
                "3",
                "7",
            ],
            answer: "3",
        },
        {
            question: "What is the traversal strategy used in binary tree",
            options: [
                "Breadth first traversal",
                "Depth first search",
                "Random traversal",
                "Heap System",
            ],
            answer: "Breadth first search",
        },
        {
            question: "How many types of insertion are performed in a binary tree ?",
            options: [
                "1",
                "2",
                "3",
                "4",
            ],
            answer: "2",
        },
        {
            question: "The average depth of binary tree is given as ",
            options: [
                "O(N)",
                "O(N2)",
                "O(log + 1)",
                "O(log N)",
            ],
            answer: "O(log N)",
        },

    ];
    const optionLetters = [ 'A', 'B', 'C', 'D' ];
    return (
        <McqLayout>
            <section id="content-wrapper">
                <div className="quiz-app p-4">
                    <h2 className="  text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">Array & Stack Data Structure</h2>
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