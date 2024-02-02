import React from 'react';
import MainLayout from './MainLayout';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
const About = () => {
    return (
        <MainLayout>
            <div>
                <Head>
                    <title>About Us | Learn Coding Online</title>
                    <meta name="description" content="We offer tutorials on various topics, such as web development, data science, machine learning, game design, and more." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="Keywords" content="HTML,coding tutorials.in,codingtutorials, coding tutorials, codingtutorials.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website" />

                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="336" />
                    <meta property="og:image:height" content="128" />
                    <meta property="og:title" content="About us | Coding Tutorials.in Free Online Tutorials" />
                    <meta property="og:description" content="We offer tutorials on various topics, such as web development, data science, machine learning, game design, and more" />
                    <link rel="icon" href="/favicon.ico" height="50px" width="70px" type="image/x-icon"></link>
                </Head>
                <section className="box-border h-full w-auto m-6 border-2 shadow-md shadow-cyan-600 hover:shadow-indigo-700">
                    <h1 className='title-font p-2 sm:text-4xl text-center text-2xl mb-10 font-medium text-blue-700'>About us | Coding Tutorials.in</h1>
                    <div className="container px-5 py-10 mx-auto flex flex-wrap">
                        <Image src="/images/content.png" alt="about" width={ 200 } height={ 50 } />
                        <div className="md:w-3/5 md:pl-6">
                            <p className="title-font text-lg"> The website where you can learn how to code from scratch. Whether you are a beginner or an experienced programmer, you will find something useful and interesting on our site. We offer tutorials on various topics, such as web development, data science, machine learning, game design, and more.</p>

                        </div>
                    </div>
                    <section>
                        <div className="container px-2 mx flex flex-wrap mb-4">
                            <p>
                                You can also access quizzes, exercises, and projects to test your skills and apply what you have learned. Our tutorials are written by experts who have years of experience in the field and are passionate about sharing their knowledge with others. They are also easy to follow, interactive, and fun. You can learn at your own pace and schedule, and get feedback and support from our community of learners and instructors.<br /><br /><br /> Whether you want to start a career in coding, advance your current skills, or simply have fun with programming, we are here to help you. Join us today and start your coding journey with Coding Tutorials!
                            </p>
                            <p className='mt-4'>Our platform is constantly evolving and we welcome any ideas or comments you have.

                                We are a team of passionate developers who strive to create coding resources that are correct and easy to understand.</p>
                        </div>
                    </section>
                </section>
                <section className="bg-pink-400 box-border  w-auto p-3 m-6 border-2 shadow-md shadow-cyan-600 hover:shadow-indigo-700">
                    <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-white text-3xl mb-4 font-medium ">“Before software can be reusable it first has to be usable.” – Ralph Johnson</h1>
                        </div>
                    </div>
                </section>

                <h1 className="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-blue-700">Our Timeline</h1>
                <div className="mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-2 h-full">

                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className=" flex items-center order-1 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold  text-lg">1</h1>
                            </div>
                            <div className="order-1 bg-blue-700 rounded-lg shadow-xl w-5/12 px-3 py-2">
                                <h3 className="mb-3 font-bold text-yellow-400 text-xl">April 2023</h3>
                                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">Coding Tutorials.in website launched with 4 subjects MCQ Html, DBMS, Python and Networking.</p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className=" flex items-center order-1 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto  font-semibold text-lg">2</h1>
                            </div>
                            <div className="order-1 bg-blue-700 rounded-lg shadow-xl w-5/12 px-3 py-2">
                                <h3 className="mb-3 font-bold text-yellow-400 text-xl">April 2023</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Computer Glossary Topic is added for students.
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className=" flex items-center order-1 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg">3</h1>
                            </div>
                            <div className="order-1 bg-blue-700 rounded-lg shadow-xl w-5/12 px-3 py-2">
                                <h3 className="mb-3 font-bold text-yellow-400 text-xl">April 2023</h3>
                                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">Free E-Books section is added.</p>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className=" flex items-center order-1 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-aut font-semibold text-lg">4</h1>
                            </div>
                            <div className="order-1 bg-blue-700 rounded-lg shadow-xl w-5/12 px-3 py-2">
                                <h3 className="mb-3 font-bold text-yellow-400 text-xl">May 2023</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Online Code Editor is added for students.
                                </p>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className=" flex items-center order-1  shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg">5</h1>
                            </div>
                            <div className="order-1 bg-blue-700 rounded-lg shadow-xl w-5/12 px-3 py-4">
                                <h3 className="mb-3 font-bold text-yellow-400 text-xl">May 2023</h3>
                                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">Interview Question with Answers section is added.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="body-font">

                    <h1 className="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-blue-700">Our Testimonial</h1>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4  shadow-md shadow-cyan-600">
                                <div className="h-full text-center">

                                    <p className="leading-relaxed">I have learned so much from coding tutorials.in website. The instructors are knowledgeable and engaging, the courses are well-structured and up-to-date, and the exercises are challenging and fun. I highly recommend this website to anyone who wants to learn coding skills in a fast and easy way.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Radhika Malhotra</h2>
                                    <p className="text-gray-700 dark:text-white">Front-end Developer</p>
                                </div>
                            </div>
                            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4  shadow-md shadow-cyan-600">
                                <div className="h-full text-center">

                                    <p className="leading-relaxed">Coding tutorials.in website is the best online learning platform for coding enthusiasts. The website offers a variety of courses on different topics and languages, from beginner to advanced level. The courses are interactive and practical, with clear explanations and examples. The website also provides support and feedback from the instructors and the community. I love coding tutorials.in website and I think you will too.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Anshika Maheshwari</h2>
                                    <p className="text-gray-700 dark:text-white">UI Develeoper</p>
                                </div>
                            </div>
                            <div className="lg:w-1/3 lg:mb-0 p-4  shadow-md shadow-cyan-600">
                                <div className="h-full text-center">

                                    <p className="leading-relaxed">If you are looking for a reliable and affordable way to learn coding, look no further than coding tutorials.in website. The website has a huge collection of courses on various coding topics and languages, suitable for all skill levels. The courses are taught by experienced and friendly instructors, who guide you through the concepts and techniques with ease. The website also has a lot of resources and tips to help you improve your coding skills. Coding tutorials.in website is the ultimate online learning destination for coders.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Rohan Sharma</h2>
                                    <p className="text-gray-700 dark:text-white">Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="box-border h-full w-auto p-10 mx-4 border-1 shadow-lg shadow-cyan-600 hover:shadow-indigo-700">
                    <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
                        <div className="text-center lg:w-3/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Join our Team</h1>
                            <p className="mb-8 leading-relaxed">We are looking for talented and motivated individuals to join our team. If you are passionate about creating innovative solutions and delivering value to our clients, we want to hear from you.</p>
                            <div className="flex justify-center">
                                <Link href="/career">
                                    <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">See Current Opportunity</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </MainLayout>
    );
};

export default About;