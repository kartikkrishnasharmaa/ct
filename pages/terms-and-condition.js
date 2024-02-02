import React from 'react';
import Head from 'next/head';
import MainLayout from './MainLayout';

const termscondition = () => {
    return (
        <MainLayout>
            <Head>
                <title>Terms and condition | Coding Tutorials</title>
                <meta name="description" content="An Online place where you can write code and test your code in real time without installing any additional softwares." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Terms and condition " />
            </Head>
            <div className="box-border h-full w-auto p-10 m-6 border-4 shadow-xl shadow-cyan-600 hover:shadow-indigo-700">
                <h1 className='title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-blue-700'>Terms and Conditions</h1>

                <p>Welcome to Coding Tutorials, a website that provides free and easy-to-follow tutorials on various programming languages and topics. By accessing and using this website, you agree to be bound by the following terms and conditions. If you do not agree with any of these terms, please do not use this website.</p>
                <ul>
                    <li className='m-5'> <b>1. Intellectual Property Rights : <br /></b>
                        All the content on this website, including but not limited to text, images, videos, code snippets, logos, trademarks, and design, are the property of Coding Tutorials or its licensors and are protected by copyright and other intellectual property laws. You may not copy, reproduce, distribute, modify, create derivative works of, or publicly display any of the content on this website without the prior written consent of Coding Tutorials or its licensors.</li>

                    <li className="m-5"><b>2. User Conduct <br /></b>
                        You agree to use this website for lawful and educational purposes only. You may not use this website in any way that violates any applicable laws or regulations, infringes on the rights of others, or harms or interferes with the operation of this website. You may not upload, post, transmit, or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another privacy, hateful, or racially, ethnically or otherwise objectionable. You may not impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity. You may not attempt to gain unauthorized access to this website or any of its features or services.</li>

                    <li className="m-5"><b> 3. Disclaimer of Warranties <br /></b>
                        This website and its content are provided as is and as available without any warranties of any kind, either express or implied. Coding Tutorials does not warrant that this website will be uninterrupted, error-free, secure, or free of viruses or other harmful components. Coding Tutorials does not warrant that the content on this website is accurate, complete, reliable, current, or suitable for your needs. Coding Tutorials does not warrant that any results that may be obtained from the use of this website will be satisfactory or beneficial to you. You use this website at your own risk and discretion.</li>

                    <li className="m-5"><b>4. Limitation of Liability <br /></b>

                        To the fullest extent permitted by law, Coding Tutorials and its affiliates, directors, employees, agents, licensors, and partners shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising out of or in connection with your use of or inability to use this website or its content. This limitation applies whether the alleged liability is based on contract, tort (including negligence), strict liability or any other legal theory.
                    </li>
                    <li className="m-5"><b>5. Indemnification <br /></b>

                        You agree to indemnify and hold harmless Coding Tutorials and its affiliates,
                        directors,
                        employees,
                        agents,
                        licensors,
                        and partners from and against any and all claims,
                        demands,
                        actions,
                        liabilities,
                        costs,
                        and expenses (including reasonable attorney fees) arising out of or in connection with your use of this website,
                        your violation of these terms and conditions,
                        or your infringement of any rights of others.
                    </li>
                    <li className="m-5"><b>6. Modification of Terms <br /></b>

                        Coding Tutorials reserves the right to change these terms and conditions at any time without prior notice. Your continued use of this website after any such changes constitutes your acceptance of the new terms and conditions. You should review these terms and conditions periodically to ensure that you are aware of the current terms and conditions.
                    </li>
                    <li className="m-5"><b> 7. Termination <br /></b>

                        Coding Tutorials may terminate your access to this website at any time for any reason without prior notice. These terms and conditions shall survive any such termination.
                    </li>
                    <li className="m-5"><b> 8. Governing Law <br /></b>

                        These terms and conditions shall be governed by and construed in accordance with the laws of the United States of America without regard to its conflict of law principles. Any disputes arising out of or relating to these terms and conditions shall be submitted to the exclusive jurisdiction of the courts located in the United States of America.
                    </li>
                    <li className="m-5"><b> 9. Contact Us <br /></b>

                        If you have any questions or comments about these terms and conditions,
                        please contact us at <span className='font-bold'>codingtutorials.in@gmail.com</span> .
                    </li>

                </ul>
            </div>
        </MainLayout>
    );
};

export default termscondition;