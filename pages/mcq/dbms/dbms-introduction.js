import McqLayout from "../../../layouts/Mcqlayout";

function QuizApp() {
    const quizData = [
        {
            question: "A collection or raw facts and figure is called",
            options: [
                "Data",
                "Processing",
                "Information",
                "none"
            ],
            answer: "Data",
        },
        {
            question: "The Manipulated and processed data is",
            options: [
                "Date",
                "Object",
                "Information",
                "None"
            ],
            answer: "Information"
        }, {
            question: "Manipulation to data to achieve the required objectives and result is called",
            options: [
                "Operation",
                "Data Processing",
                "Both A and B",
                "None"
            ],
            answer: "Data Processing"
        },
        {
            question: "A person account, car, and house and considered",
            options: [
                "Object",
                "Table",
                "Data Processing",
                "None"
            ],
            answer: "Object"
        },
        {
            question: "A collection of relate field is",
            options: [
                "File",
                "Record",
                "Database",
                "None"
            ],
            answer: "Record"
        },
        {
            question: "All records in a file have the same",
            options: [
                "Structure",
                "Contents",
                "Both A & B",
                "None"
            ],
            answer: "Structure"
        },
        {
            question: "A record in a database is the information referring to a",
            options: [
                "Person",
                "Product",
                "Computer",
                "All of the above"
            ],
            answer: "All of the above"
        },
        {
            question: "A logical grouping of characters is",
            options: [
                "Field",
                "Record",
                "File",
                "All of the above"
            ],
            answer: "Field"
        },
        {
            question: "A database containing all students in a class would store basic data of students is",
            options: [
                "Field",
                "Record",
                "Cell",
                "File"
            ],
            answer: "File"
        },
        {
            question: "Which of the following is also known as data set ?",
            options: [
                "File",
                "Record",
                "Databse",
                "Field"
            ],
            answer: "File"
        }, {
            question: "A set of related files created and managed bby DBMS is called",
            options: [
                "Field",
                "Database",
                "Record",
                "Collection"
            ],
            answer: "Database"
        }

    ];
    const optionLetters = [ 'A', 'B', 'C', 'D' ];
    return (
        <McqLayout>
            <section id="content-wrapper">
                <div className="quiz-app">
                    <h2 className="  text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">Introduction to Database</h2>
                    { quizData.map( ( questionObj, index ) => (
                        <div className="w-auto space-y-6 py-8 p-4 text-base leading-7 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700" key={ index }>
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