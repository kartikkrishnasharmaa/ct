import React, { useState } from 'react';
import Quiz from "../../layouts/Quizlayout";
import Head from "next/head";

const quizData = [
    // add computer networking questions here
    {
        question: "Which of the following is not a layer of OSI model?",
        options: [
            "Application Layer",
            "Presentation Layer",
            "Session Layer",
            "Physical Layer",
        ],
        answer: "Session Layer",
    },
    {
        question: "Which of the following is not a layer of TCP/IP model?",
        options: [

            "Application Layer",
            "Transport Layer",
            "Internet Layer",
            "Session Layer",
        ],
        answer: "Session Layer",
    },
    {
        question: "Which of the following is true for coaxial cables?",
        options: [
            "It is used for cable TV",
            "It is used for telephone lines",
            "It is used for computer networking",
            "All of the above",
        ],
        answer: "It is used for cable TV",
    },
    {
        question: "Which of the following is true for twisted pair cables?",
        options: [
            "It is used for cable TV",
            "It is used for telephone lines",
            "It is used for computer networking",
            "All of the above",
        ],
        answer: "It is used for telephone lines",
    },
    {
        question: "What is the maximum bandwidth that can be supported by fiber optics cable?",
        options: [
            "100 Mbps",
            "1000 Mbps",
            "10000 Mbps",
            "100000 Mbps",
        ],
        answer: "100000 Mbps",
    },
    {
        question: "Media Access Control (MAC) and Logical Link Control (LLC) are two sublayers of _________________.",
        options: [
            "Data Link Layer",
            "Network Layer",
            "Physical Layer",
            "Transport Layer",
        ],
        answer: "Data Link Layer",
    },
    {
        question: "Which of the following is not a type of guided media?",
        options: [
            "Twisted Pair Cable",
            "Coaxial Cable",
            "Fiber Optics Cable",
            "All of the above",
        ],
        answer: "All of the above",
    },
    {
        question: "Which of the following is not a type of unguided media?",
        options: [
            "Twisted Pair Cable",
            "Coaxial Cable",
            "Fiber Optics Cable",
            "All of the above",
        ],
        answer: "Twisted Pair Cable",
    },
    {
        question: "Radio waves and microwaves are used in which of the following communications?",
        options: [
            "Satellite Communication",
            "Microwave Communication",
            "Radio Communication",
            "All of the above",
        ],
        answer: "All of the above",
    },

    {
        question: "Two computers C1 and C2 are configured as follows. C1 has IP address 203.197.2.53 and netmask 255.255.128.0. C2 has IP address 203.197.75.201 and netmask 255.255.192.0. which one of the following statements is true?",
        options: [
            "C1 and C2 both are in same network",
            "C1 and C2 both are in different network",
            "C1 assumes C2 is on same network, but C2 assumes C1 is on a different network",
            "C1 and C2 both are in different subnet",
        ],
        answer: "C1 assumes C2 is on same network, but C2 assumes C1 is on a different network",
    },
];

function QuizApp() {
    const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState( 0 );
    const [ score, setScore ] = useState( 0 );
    const [ quizCompleted, setQuizCompleted ] = useState( false );
    const [ userAnswers, setUserAnswers ] = useState( [] );
    const [ selectedAnswer, setSelectedAnswer ] = useState( '' );
    const questionData = quizData[ currentQuestionIndex ];
    const totalQuestions = quizData.length;

    const handleAnswer = ( selectedAnswer ) => {

        const correctAnswer = questionData.answer.trim();
        if ( selectedAnswer.trim() === correctAnswer ) {
            setScore( score + 1 );
        }
        setUserAnswers( [ ...userAnswers, { question: questionData.question, selectedAnswer, correctAnswer } ] );

        const nextQuestionIndex = currentQuestionIndex + 1;
        if ( nextQuestionIndex < totalQuestions ) {
            setCurrentQuestionIndex( nextQuestionIndex );
            setSelectedAnswer( '' ); // Reset selected answer for next question
        } else {
            setQuizCompleted( true );
        }
    };

    const handleOptionChange = ( event ) => {
        setSelectedAnswer( event.target.value );
    };

    const handleSubmit = ( event ) => {
        event.preventDefault();
        if ( selectedAnswer ) {
            handleAnswer( selectedAnswer );
        } else {
            alert( "Please select an answer before proceeding." );
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex( 0 );
        setScore( 0 );
        setUserAnswers( [] );
        setQuizCompleted( false );
        setSelectedAnswer( '' );
    };

    const progressBarWidth = ( ( currentQuestionIndex + 1 ) / totalQuestions ) * 100;

    return (
        <Quiz>
            <Head>
                <title>Computer Networking  Online Quiz | Coding Tutorials</title>
                <meta name="description" content="Enhance your understanding of computer networking concepts with our interactive online quiz. Dive into topics like protocols, network architecture, and troubleshooting. Put your skills to the test now" />
                <meta name="keywords" content="computer networking,computer network,computer networks,networking,computer networking basics,computer networking tutorial,computer networking course,computer networking full course,computer networks for gate,computer networking for ethical hacking,networking fundamentals,what is computer network,computer network basics,networking for beginners,computer,networking basics,about computer networking,basic computer networking,computer networking mcq,networking quiz,computer networking,top 100 computer networking mcq,mcqs questions of computer networking,computer networking quiz,the bits and bytes of computer networking,networking,computer network mcq,networking mcq,mcq of computer network,networking mcq questions and answers,mcq of computer networks,networking important mcq,networking mcq questions,computer networking mcqs,mcq of computer networking,networking mcq for interview" />
                <link rel="canonical" href="https://codingtutorials.in/quiz/networking-quiz" />
                <meta property="og:title" content="Computer Networking  Online Quiz | Coding Tutorials" />
                <meta property="og:description" content="Enhance your understanding of computer networking concepts with our interactive online quiz. Dive into topics like protocols, network architecture, and troubleshooting. Put your skills to the test now" />
                <meta property="og:url" content="https://codingtutorials.in/quiz/networking-quiz" />
                <meta property="og:site_name" content="Coding Tutorials" />
                <meta property="og:image" content="https://codingtutorials.in/images/logo.png" />
                <meta property="og:image:secure_url" content="https://codingtutorials.in/images/logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Coding Tutorials" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Computer Networking  Online Quiz | Coding Tutorials" />
                <meta name="twitter:description" content="Enhance your understanding of computer networking concepts with our interactive online quiz. Dive into topics like protocols, network architecture, and troubleshooting. Put your skills to the test now" />
                <meta name="twitter:url" content="https://codingtutorials.in/quiz/networking-quiz" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://codingtutorials.in/" />
                <meta name="twitter:image:src" content="https://codingtutorials.in/images/logo.png" />
                <meta name="twitter:image:alt" content="Coding Tutorials" />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="630" />
            </Head>
            <section id="content-wrapper">

                <div className="quiz-app p-4">
                    <h2 className="  text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">Computer Networking Online Quiz</h2>
                    <div className="progress-bar w-full bg-gray-300 mt-7 h-2 mb-4">
                        <div className="progress-bar-fill bg-blue-500 h-full" style={ { width: `${progressBarWidth}%` } }></div>
                    </div>
                    { quizCompleted ? (
                        <div className="result">
                            <button
                                className="inline-block mb-5 mt-7 px-3 py-1 border-2  text-base font-bold leading-normal uppercase text-black rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out dark:text-white"
                                onClick={ restartQuiz }
                            >
                                Restart Quiz
                            </button>
                            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
                            <p className="text-xl mb-6">Your score: { score } Out of { totalQuestions }</p>

                            <div className="result-details">
                                { userAnswers.map( ( answer, index ) => (
                                    <div key={ index } className=" mt-10 mb-8 box-border rounded-2xl w-full p-5 m-3 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700">
                                        <h1 className="mb-2 text-xl"><strong>Question : { index + 1 } </strong> { answer.question }</h1>
                                        <ul className="list-disc pl-6">
                                            { quizData[ index ].options.map( ( option, optionIndex ) => (
                                                <li
                                                    key={ optionIndex }
                                                    className={ answer.correctAnswer === option ? 'text-green-600' : '' }
                                                >
                                                    { option }
                                                </li>
                                            ) ) }
                                        </ul>
                                        <p className="mb-2 mt-4"><strong>Your Answer:</strong> { answer.selectedAnswer }</p>
                                        <p className="mb-2"><strong>Correct Answer:</strong> { answer.correctAnswer }</p>
                                    </div>
                                ) ) }
                            </div>
                            <button
                                className="inline-block mt-7 px-6 py-2 border-2  text-base font-bold leading-normal uppercase text-black rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out dark:text-white"
                                onClick={ restartQuiz }
                            >
                                Restart Quiz
                            </button>
                        </div>
                    ) : (
                        <div className="question">
                            <h1 className="mb-2 text-2xl">Question { currentQuestionIndex + 1 } / { totalQuestions }</h1>
                            <h2 className="text-xl font-semibold mb-4 mt-8"> Question { currentQuestionIndex + 1 }: { questionData.question }</h2>
                            <form onSubmit={ handleSubmit }>
                                { questionData.options.map( ( option, index ) => (
                                    <label key={ index } className="block mb-2">
                                        <input
                                            type="radio"
                                            value={ option }
                                            checked={ selectedAnswer === option }
                                            onChange={ handleOptionChange }
                                            className="mr-2"
                                        />
                                        { option }
                                    </label>
                                ) ) }
                                <button
                                    type="submit"
                                    className="inline-block mt-7 px-6 py-2 border-2  text-base font-bold leading-normal uppercase text-black rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out dark:text-white"
                                >
                                    Next
                                </button>
                            </form>
                        </div>
                    ) }
                </div>
            </section>
        </Quiz >
    );
}

export default QuizApp;