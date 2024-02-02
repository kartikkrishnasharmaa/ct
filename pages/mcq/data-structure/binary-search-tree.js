import McqLayout from "../../../layouts/Mcqlayout";

function QuizApp() {
    const quizData = [
        {
            question: "The number of edge from the node to the deepest leaf is called ____ of the tree",
            options: [
                "Height",
                "Depth",
                "Length",
                "None of the above",
            ],
            answer: "Height",
        },
        {
            question: "Which of the following is false about a binary search tree ?",
            options: [
                "The left child is always lesser than its parent",
                "The right child is always greater than its parent",
                "The left and right sub trees shoud also be binary search trees",
                "None of the above",
            ],
            answer: "None of the above",
        },
        {
            question: "What is the speciality about the inorder traversal of a binary search tree",
            options: [
                "It traverses in a non increasing order",
                "It traverses in an increasing order",
                "It traverses in a random order",
                "It traverses in a decreasing order",
            ],
            answer: "It traverses in a increasing order",
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