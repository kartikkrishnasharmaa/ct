import Cheatlayout from "../../layouts/Cheatlayout";
import Head from "next/head";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default function Home() {
    return <Cheatlayout>
        <Head>
            <title>C++ Cheat Sheet | Coding Tutorials</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="C++ Cheat Sheet | Coding Tutorials" />
        </Head>
        <section className="lg:ml-36">
            <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="container mx-auto mt-4">
                    <h2 className=" text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">C++ Cheat Sheet </h2>
                    <p className="mt-7"> Here is C++ quick reference code snippets which is useful for developers.</p>

                    <p className=" text-primary dark:text-white text-xl mt-8 font-bold text-center sm:text-xl  xl:text-2xl dark:text-blue">Basic Introduction </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 box-border rounded-2xl w-full p-1 mt-6 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700">

                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Hello world </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `#include <iostream>
using namespace std;
int main()
{
 cout << "Hello World!";
 return 0;
}


Output: Hello World!`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Variables </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99;     // Floating point number
double myDoubleNum = 9.98;   // Floating point number
char myLetter = 'D';         // Character
bool myBoolean = true;       // Boolean
string myText = "Hello";     // String`}

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Comments </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
// This is single line comment
/* The is multiple line comment */
                                 ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">User Input </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
#include <iostream>
using namespace std;
int main()
{
    int x;
    cout << "Type a number: "; // Type a number and press enter
    cin >> x; // Get user input from the keyboard
    cout << "Your number is: " << x; // Display the input value
    return 0;
}

Output: Type a number: 4
        Your number is: 4` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">If statement </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
if (20 > 18) {
    cout << "20 is greater than 18";
}
                                ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">If else statement </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `if (20 > 18) {
    cout << "20 is greater than 18";
} else {
    cout << "20 is not greater than 18";
}                                 ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">For Loop </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
for (int i = 0; i < 5; i++) {
    cout << i << "\n";
}

                                 ` }

                            </SyntaxHighlighter>
                        </div>

                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">While Loop </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
int i = 0;
while (i < 5) {
    cout << i << "\n";
    i++;
}

                                 ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Function </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
void myFunction() {
    cout << "I just got executed!";
}

                                  ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Namespace </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `// A namespace ensures that all of a given set of objects have unique names so that they can be easily identified.
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello World!";
    return 0;
}

                                 ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue"> Relational Operator </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
==	Equal to
!=	Not equal to
>	Greater than
<	Less than
>=	Greater than or equal to
<=	Less than or equal to
   ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue"> Logical Operator </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
&&	Logical and
||	Logical or
!	Logical not
                                 ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue"> Assignment Operator </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
=	x = 5	x = 5
+=	x += 3	x = x + 3
-=	x -= 3	x = x - 3
*=	x *= 3	x = x * 3
/=	x /= 3	x = x / 3
%=	x %= 3	x = x % 3
                                 ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Bitwise Operator  </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
&	AND	5 & 1	1
|	OR	5 | 1	5
^	XOR	5 ^ 1	4
~	NOT	~5	10
<<	Zero fill left shift	5 << 1	10
>>	Signed right shift	5 >> 1	2

                                 ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Overloading  </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
#include <iostream>
using namespace std;

class MyClass {
    public:
        void myFunction() {
            cout << "Some content in parent class.";
        }
};

class MyOtherClass {
    public:
        void myFunction() {
            cout << "Some content in another class.";
        }
};

class MyChildClass: public MyClass, public MyOtherClass {
};

int main() {
    MyChildClass myObj;
    myObj.myFunction();
    return 0;
}

` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue"> Built in Function </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    cout << sqrt(64);
    return 0;
}

Output
8
                                ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Define Class  </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
#include <iostream>
using namespace std;

class MyClass {       // The class
    public:           // Access specifier
        int myNum;    // Attribute (int variable)
        string myString;  // Attribute (string variable)
};

int main() {
    // Create an object of MyClass
    MyClass myObj;

    // Access attributes and set values
    myObj.myNum = 15;
    myObj.myString = "Some text";

    // Print attribute values
    cout << myObj.myNum << "\n";
    cout << myObj.myString;
    return 0;
}
                                 ` }

                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue"> Creating a class </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="c++" style={ a11yDark }>
                                { `
#include <iostream>
using namespace std;

// Create a MyClass class

class MyClass {
    public:
        int myNum;        // public attribute
        string myString;  // public attribute
};

int main() {
    // Create an object of MyClass
    MyClass myObj;

    // Access attributes and set values
    myObj.myNum = 15;
    myObj.myString = "Some text";

    // Print attribute values
    cout << myObj.myNum << "\n";
    cout << myObj.myString;
    return 0;
}
                                 ` }

                            </SyntaxHighlighter>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </Cheatlayout>;
}