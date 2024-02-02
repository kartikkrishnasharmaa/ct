import McqLayout from "../../../layouts/Mcqlayout";

function QuizApp() {
    const quizData = [
        {
            question: "Which of the following is not one of the three schemas used i the ANSI/SPARC",
            options: [
                "External",
                "Internal",
                "Implementation",
                "Conceptual",
            ],
            answer: "Implementation",
        },
        {
            question: "Although all database professionals concerned with performance, select the database professional the is most likely to be concerned with database performance",
            options: [
                "Database Administrator",
                "Web Developer",
                "Cloud Architect",
                "Application Developer",
            ],
            answer: "Database Administrator",
        },
        {
            question: "Which data model creates parent child relationships between data elements and restrict each child to have just one parent ?",
            options: [
                "Relational",
                "Object Oriented",
                "Network Model",
                "Hierarchical Model",
            ],
            answer: "Hierarchical Model",
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