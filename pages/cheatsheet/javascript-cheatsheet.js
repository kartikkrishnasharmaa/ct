import Cheatlayout from "../../layouts/Cheatlayout";
import Head from "next/head";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default function Home() {
    return <Cheatlayout>
        <Head>
            <title>JavaScript Cheat Sheet  | Coding Tutorials</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Google Chrome Shortcut" />
        </Head>
        <section className="lg:ml-36">
            <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="container mx-auto mt-4">
                    <h2 className=" text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">JavaScript Cheat Sheet </h2>
                    <p className="mt-7"> Here is JavaScript quick reference code snippets which is useful for developers.  </p>

                    <p className=" text-primary dark:text-white text-xl mt-8 font-bold text-center sm:text-xl  xl:text-2xl dark:text-blue">Basic Operation </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 box-border rounded-2xl w-full p-1 mt-6 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700">

                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Console </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `// => Hello world!
console.log('Hello world!');

// Prints error message
console.error(new Error('Something went wrong!'));
`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Number </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `let laptop = 2;
let price = 60,000;
let total = laptop * price;
console.log(total);

`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Variable </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `let name = 'Coding Tutorials';
let age = 20;
let isApproved = true;
let firstName = undefined;
let lastName = null;

`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Strings </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `let single = 'single quotes';
let double = "double quotes";

console.log(single.length);

console.log(single.toUpperCase());
`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Comments </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `// This is single line comment

/*  
This is multi line comment.
This is multi line comment.
This is multi line comment. 
*/
`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Assignment Operator </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `let x = 10;
 x += 5;
 x -= 5;
 x *= 5;
 x /= 5;
 x %= 5;
 x **= 5;
 console.log(x);`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Const Keyword </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `const interestRate = 0.3;
interestRate = 1;
console.log(interestRate); // => TypeError: Assignment to constant variable.
`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Let Keyword</p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `let count; 
console.log(count); // => undefined
count = 10;
console.log(count); // => 10
count = 20;
console.log(count); // => 20`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <p className=" text-primary dark:text-white text-xl mt-8 font-bold text-center sm:text-xl  xl:text-2xl dark:text-blue">JavaScript Functions</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 box-border rounded-2xl w-full p-1 mt-6 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700">

                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Normal Function </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function:
sum(1, 1);
console.log(sum(1, 1)); // => 2`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Anonymous Function </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `// Named function
function hello() {
  return 'HELLO';
}

// Anonymous function
const hello = function() {
  return 'HELLO';
} ` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Return Keyword </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `// With return
function sum(num1, num2) {
  return num1 + num2;
}

// The function doesn't output the sum
function sum(num1, num2) {
  num1 + num2;
}
` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Function Declaration</p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `function add(one, two) {
  return one + two;
}
` }
                            </SyntaxHighlighter>
                        </div>
                    </div>

                    <p className=" text-primary dark:text-white text-xl mt-8 font-bold text-center sm:text-xl  xl:text-2xl dark:text-blue">Conditional Statement</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 box-border rounded-2xl w-full p-1 mt-6 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700">

                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">if statement </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `const isValid = true;

if (isValid) {
  console.log('This is valid');
}
`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">else if statement </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">switch statement </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;` }
                            </SyntaxHighlighter>
                        </div>
                    </div>


                    <p className=" text-primary dark:text-white text-xl mt-8 font-bold text-center sm:text-xl  xl:text-2xl dark:text-blue">JavaScript Array</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 box-border rounded-2xl w-full p-1 mt-6 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700">

                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Array</p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `const fruits = ['Apple', 'Banana'];
console.log(fruits.length); // 2
console.log(fruits[0]); // Apple`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Array Length</p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.length // 10
` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Array Index</p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `// Accessing an array element by index
const myArray = [a, b, c, d];

console.log(myArray[0]); // a
console.log(myArray[1]); // b
console.log(myArray[2]); // c
console.log(myArray[3]); // d
` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Array Push Method</p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('banana'); 

// Adding multiple elements:
const numbers = [3, 6, 9 ];
numbers.push(12, 15, 18);
` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Array Pop Method</p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { ` // Remove item from array
const numbers = [3, 6, 9 ];
numbers.pop(9);` }
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Cheatlayout>;
}