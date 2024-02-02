import React, { useState } from 'react';
import Quiz from "../../layouts/Quizlayout";
import Head from "next/head";

const quizData = [
    // add reactjs questions here
    {
        question: "What is React?",
        options: [ "Server-side Framework", "User-interface framework", "A Library for building interaction interfaces", "None of the above" ],
        answer: " A Library for building interaction interfaces",
    },
    {
        question: "What is JSX?",
        options: [ "JavaScript XML", "JavaScript Syntax Extension", "JavaScript XML Syntax", "None of the above" ],
        answer: "JavaScript XML",
    },
    {
        question: "What is the virtual DOM?",
        options: [ "A virtual representation of DOM", "A Shadow DOM", "A DOM with latest CSS", "None of the above" ],
        answer: "A virtual representation of DOM",
    },
    {
        question: "What is the use of the create-react-app command?",
        options: [ "Sets up a ReactJS environment", "Installs all the dependencies needed for a ReactJS application", "Both of the above", "None of the above" ],
        answer: "Both of the above",
    },
    {
        question: "What is the use of the render() function in React?",
        options: [ "Renders the component into the DOM", "Renders the component UI", "Renders the component props", "None of the above" ],
        answer: "Renders the component into the DOM",
    },
    {
        question: "What is the use of the ReactDOM library in React?",
        options: [ "To render the component tree into the DOM", "To render the component UI", "To render the component props", "None of the above" ],
        answer: "To render the component tree into the DOM",
    },
    {
        question: "What is the use of the setState() method?",
        options: [ "To update the component state", "To update the component UI", "To update the component props", "None of the above" ],
        answer: "To update the component state",
    },
    {
        question: "What is the use of the constructor(props) method in React?",
        options: [ "To initialize the component state", "To initialize the component props", "To initialize the component context", "None of the above" ],
        answer: "To initialize the component state",
    },
    {
        question: "What is the use of the super(props) method?",
        options: [ "To initialize the component state", "To initialize the component props", "To initialize the component context", "None of the above" ],
        answer: "To initialize the component props",
    },
    {
        question: "What is the use of the componentDidMount() method?",
        options: [ "To update the component state", "To update the component UI", "To initialize the component props", "None of the above" ],
        answer: "To update the component UI",
    },
    {
        question: "What is the use of the componentWillMount() method?",
        options: [ "To update the component state", "To update the component UI", "To initialize the component props", "None of the above" ],
        answer: "To initialize the component props",
    },
    {
        question: "What is the use of the componentWillUnmount() method?",
        options: [ "To update the component state", "To update the component UI", "To initialize the component props", "To free up the resources taken by the component", ],
        answer: "To free up the resources taken by the component",
    },
    {
        question: "What is the use of the shouldComponentUpdate() method?",
        options: [ "To update the component state", "To update the component UI", "To initialize the component props", "To check if the component requires re-rendering", ],
        answer: "To check if the component requires re-rendering",
    },
    {
        question: "What is the use of the componentDidUpdate() method?",
        options: [ "To update the component state", "To update the component UI", "To initialize the component props", "To check if the component requires re-rendering", ],
        answer: "To check if the component requires re-rendering",
    },
    {
        question: "In React.js which one of the following is used to create a class for Inheritance ?",
        options: [ "React.createClass()", "React.Component.extend()", "React.Component.create()", "React.Component.createClass()", ],
        answer: "React.Component.createClass()",
    },
    {
        question: "In React.js what is used to pass data to a component from outside ?",
        options: [ "setState", "render with arguments", "PropTypes", "Props", ],
        answer: "Props",
    },
    { question: "What is the use of refs in React?", options: [ "To access DOM nodes", "To access props", "To access state", "None of the above" ], answer: "To access DOM nodes" },
    {
        question: "What is the use of keys in React?",
        options: [ "Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI", "Keys are used for identifying unique DOM Elements with their corresponding data driving the UI", "Keys are used for identifying unique Virtual DOM Elements", "None of the above" ],
        answer: "Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI",
    },
    {
        question: "What is the default port number in which the application run ?",
        options: [ "3000", "8080", "3030", "3001", ],
        answer: "3000",
    },
    {
        question: "Which of the following keyword is used to create a class inheritance?",
        options: [ "extends", "extends()", "inherit", "inherit()", ],
        answer: "extends",
    },
    {
        question: "Which of the following is the correct syntax for button click event handler ?",
        options: [ "onClick={this.handleClick}", "onClick={this.handleClick()}", "onClick={this.handleClick()}", "onClick={this.handleClick}", ],
        answer: "onClick={this.handleClick}",
    },
    {
        question: "Which of the following is the correct syntax for adding comments in JSX ?",
        options: [ "{/* This is a comment */}", "{* This is a comment *}", "{* This is a comment */}", "{/* This is a comment *}", ],
        answer: "{/* This is a comment */}",
    },
    {
        question: "Which of the following is the correct syntax for adding a class in JSX ?",
        options: [ "className", "class", "className()", "class()", ],
        answer: "className",
    },
    {
        question: "Which of the following is the correct syntax for adding inline styles in JSX ?",
        options: [ "style", "style()", "style={}", "style={() => {}}", ],
        answer: "style={}",
    },
    {
        question: "Which of the following is the correct syntax for adding a background color in JSX ?",
        options: [ "background-color", "backgroundColor", "background_color", "backgroundcolor", ],
        answer: "backgroundColor",
    },
    {
        question: "Which of the following is the correct syntax for adding a background image in JSX ?",
        options: [ "background-image", "backgroundImage", "background_image", "backgroundimage", ],
        answer: "backgroundImage",
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
                <title>React Js Online Quiz | Coding Tutorials</title>
                <meta name="description" content="Challenge yourself with our comprehensive React JS online quiz. Assess your expertise in React JavaScript library through interactive questions and answers. Put your skills to the test now" />
                <meta name="keywords" content="react js,react quiz app,react,react quiz,react hooks,react tutorial,quiz app react js,quiz app in react js,reactjs,quiz app react,quiz app,react js tutorial,react js crash course,quiz app using react js,react js projects for beginners,react quiz app tutorial,react quiz app with timer,react js quiz,react project,react js quiz app,learn react js,react interview questions,quiz tutorial react,learn reactjs,quiz app tutorial react" />
                <link rel="canonical" href="https://codingtutorials.in" />
                <meta property="og:title" content="React Js Online Quiz | Coding Tutorials" />
                <meta property="og:description" content="Challenge yourself with our comprehensive React JS online quiz. Assess your expertise in React JavaScript library through interactive questions and answers. Put your skills to the test now" />
                <meta property="og:url" content="https://codingtutorials.in/quiz/reactjs-quiz" />
                <meta property="og:site_name" content="Coding Tutorials" />
                <meta property="og:image" content="https://codingtutorials.in/images/logo.png" />
                <meta property="og:image:secure_url" content="https://codingtutorials.in/images/logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Coding Tutorials" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="React Js Online Quiz | Coding Tutorials" />
                <meta name="twitter:description" content="Challenge yourself with our comprehensive React JS online quiz. Assess your expertise in React JavaScript library through interactive questions and answers. Put your skills to the test now" />
                <meta name="twitter:url" content="https://codingtutorials.in/quiz/reactjs-quiz" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://codingtutorials.in/" />
                <meta name="twitter:image:src" content="https://codingtutorials.in/images/logo.png" />
                <meta name="twitter:image:alt" content="Coding Tutorials" />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="630" />
            </Head>
            <section id="content-wrapper">

                <div className="quiz-app p-4">
                    <h2 className="  text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">ReactJs Online Quiz</h2>
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
        </Quiz>
    );
}

export default QuizApp;