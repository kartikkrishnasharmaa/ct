import McqLayout from "../../../layouts/Mcqlayout";

function QuizApp() {
    const quizData = [
        {
            question: "What is AVL tree ?",
            options: [
                "a tree which is always balanced",
                "a tree which is always unbalanced",
                "a tree with 5 children",
                "a tree having 3 children",
            ],
            answer: "a tree which is always balanced",
        },
        {
            question: "What is the maximum height of an AVL tree with n nodes ?",
            options: [
                " 1.44 log2n",
                " 1.44 log2n + 1",
                " 1.44 log2n - 1",
                " log(p)",
            ],
            answer: "log(p)",
        },
        {
            question: "To restore the AVL property after inserting element, we start at the insertion point and move towards root of that tree. Is it true or false ?",
            options: [
                "True",
                "False",
                "Nothing can be said",
                "None of the above",
            ],
            answer: "True",
        },
        {
            question: "AA trees are implemented using ?",
            options: [
                "Levels",
                "Color",
                "Node size",
                "Heaps",
            ],
            answer: "Levels",
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