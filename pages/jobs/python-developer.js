import MainLayout from "pages/MainLayout";
import Head from "next/head";
const pythondeveloper = () => {
    return (
        <MainLayout>
            <Head>
                <title>Python developer job - Internship</title>
                <meta name="description" content="we are hiring Python developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="Keywords" content="Python" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="336" />
                <meta property="og:image:height" content="128" />
                <meta property="og:title" content="Python developer job - Internship" />
                <meta property="og:description" content="we are hiring react js developer" />
                <link rel="icon" href="/favicon.ico" height="50px" width="70px" type="image/x-icon"></link>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <div className="shadow rounded-lg p-6">
                    <h1 className="text-2xl font-semibold mb-4">Python Developer - Fresher</h1>
                    <div className="grid grid-cols-2 mt-4 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                        <div className="shadow-sm shadow-cyan-600 text-center">
                            <p className="mb-6 font-semibold font-xl">START DATE</p>
                            <p className="mb-6">Immediately</p>
                        </div>
                        <div className="shadow-sm shadow-cyan-600 text-center">
                            <p className="mb-6 font-semibold font-xl">DURATION</p>
                            <p className="mb-6">6 Months</p>
                        </div>
                        <div className="shadow-sm shadow-cyan-600 text-center">
                            <p className="mb-6 font-semibold font-xl">STIPEND</p>
                            <p className="mb-6">₹ 5,000-7,000 /month</p>
                        </div>
                        <div className="shadow-sm shadow-cyan-600 text-center">
                            <p className="mb-6 font-semibold font-xl">APPLY BY</p>
                            <p className="mb-6">30 September 2023</p>
                        </div>
                    </div>
                    <p className="mb-4 mt-8">
                        We, at codingTutorials.in, are a team with an aim to provide students with a platform to research and make projects in the field of AI and ML. We aim to provide an interactive learning platform for students where they will be able to learn and develop projects with our support.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Responsibilities:</h2>
                    <ul className="list-disc list-inside mb-6">
                        <li>Developing front end website architecture.</li>
                        <li>Designing user interactions on web pages.</li>
                        <li>Manage and build Python code</li>
                        <li>Upgrade the firm in-build modules and packages</li>

                    </ul>
                    <h2 className="text-xl font-semibold mb-2">Requirements:</h2>
                    <ul className="list-disc list-inside mb-6">
                        <li>Proven experience in web development</li>
                        <li>Experience using version control systems like Git</li>
                        <li>Experience in Python, Django, Flask, and other frameworks</li>
                        <li>Experience in HTML, CSS, JavaScript, and jQuery</li>
                        <li>Experience in MySQL, PostgreSQL, and MongoDB</li>

                    </ul>

                    <h2 className="text-xl font-semibold mb-2">Perks:</h2>
                    <ul className="list-disc list-inside mb-6">
                        <li>Letter of Recommendation</li>
                        <li>Flexible work hours</li>
                        <li>5 days a week</li>
                        <li>Certificate</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">Skills Required</h2>
                    <ul className="list-disc list-inside mb-6">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Flask</li>
                        <li>Python</li>

                    </ul>

                    <h2 className="text-xl font-semibold mb-2">Number of openings</h2>
                    <p className="mb-6">2</p>

                    <h2 className="text-xl font-semibold mb-2">Certificate</h2>
                    <p className="mb-6">Will be provided at the end of the Internship</p>

                    <a href="mailto:codingtutorials.in@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
                        Apply Now
                    </a>
                </div>
            </div>
        </MainLayout>
    );
};

export default pythondeveloper;