import McqLayout from "../../../layouts/Mcqlayout";

function QuizApp() {
    const quizData = [
        {
            question: "Which of these best describe an array ?",
            options: [
                "A data structure that shows a hierarchical behavior",
                "Container of objects of similar types",
                "Arrays are immutable once initialised",
                "Array is not a data structure",
            ],
            answer: "Container of objects of similar types",
        },
        {
            question: "When does the ArrayIndexOutOfBoundsException occur ?",
            options: [
                "Compile time",
                "Run Time",
                "Not an error",
                "None of the above",
            ],
            answer: "Run Time",
        },
        {
            question: "What are the advantages of arrays ?",
            options: [
                "Easier to store elements of same data type",
                "Used to implement other data structures like stacks and queues",
                "Convenient way of representing matrices as 2D arrays",
                "All of the above",
            ],
            answer: "All of the above",
        },
        {
            question: "Assuming int is of 4bytes, what is the size of int arr[15]; ?",
            options: [
                "15",
                "60",
                "30",
                "14",
            ],
            answer: "15",
        },
        {
            question: "Process of inserting an element in stack is called ____________",
            options: [
                "Create",
                "Pop",
                "Push",
                "Insert",
            ],
            answer: "Push",
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