import McqLayout from "../../../layouts/Mcqlayout";

function QuizApp() {
    const quizData = [
        {
            question: "Where is linear searching used ?",
            options: [
                "When the list has only few elements ",
                "When perofrming a single search in unordered list",
                "Used all the time",
                "When the list has only a few elements and when performing a single search in an unordered list",
            ],
            answer: "When the list has only a few elements and when performing a single search in an unordered list",
        },
        {
            question: "What is the best case for linear search ?",
            options: [
                "O(nlogn)",
                "O(logn)",
                "O(n)",
                "O(1)",
            ],
            answer: "O(1)",
        },
        {
            question: "Wrost case for linear search ?",
            options: [
                "O(nlogn)",
                "O(logn)",
                "O(n)",
                "O(1)",
            ],
            answer: "O(n)",
        },
        {
            question: "Linear search (recursive) algorithm used in _______",
            options: [
                "When the size of the dataset is low",
                "When the size of dataset is large",
                "When the dataset is unordered",
                "None of the above",
            ],
            answer: "When the size of the dataset is low",
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