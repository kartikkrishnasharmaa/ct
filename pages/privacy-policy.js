import React from 'react';
import Head from 'next/head';
import MainLayout from './MainLayout';


const privacypolicy = () => {
    return (
        <MainLayout>
            <Head>
                <title>Privacy policy | Coding Tutorials</title>
                <meta name="description" content=" privacy policy page " />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="privacy policy" />
            </Head>

            <div className="box-border h-full w-auto p-10 m-6 border-4 shadow-xl shadow-cyan-600 hover:shadow-indigo-700">
                <h1 className=' sm:text-4xl text-center text-3xl mb-10 font-bold text-blue-700'> Privacy Policy </h1>


                <p className='p-2'>This privacy policy explains how we use and protect any information that you provide when you use this website.</p>

                <p className='p-2'> We are committed to ensuring that your privacy is protected and that we comply with the applicable data protection laws and regulations.</p>

                <p className='text-xl mt-7 mb-2 font-bold text-blue-700 dark:text-white'>What information do we collect?</p>

                We do not collect any personal information from you when you visit or use this website. We do not use cookies or any other tracking technologies to monitor your browsing behavior or preferences. We do not ask you to register, sign up, or provide any contact details to access our content.

                <p className='text-xl mt-7 mb-2 font-bold text-blue-700 dark:text-white'>How do we use the information ?</p>


                We do not use any information that you provide for any purpose other than to deliver our services and improve our website. We do not share, sell, rent, or disclose any information to any third parties for any reason.

                <p className=' text-xl mt-7 mb-2 font-bold text-blue-700 dark:text-white'>How do we protect the information ?</p>


                We do not store any information that you provide on our servers or databases. We use secure encryption methods and protocols to protect our website from unauthorized access, modification, or disclosure. We also use firewall and antivirus software to prevent any malicious attacks or viruses from affecting our website.
                <p className=' text-xl mt-7 mb-2 font-bold text-blue-700 dark:text-white'>What are your rights ?</p>


                You have the right to access, correct, delete, or object to any information that we may have about you. However, since we do not collect any personal information from you, this right does not apply in this case. You also have the right to withdraw your consent or opt out of any communication or service that we may offer you. However, since we do not send you any communication or offer you any service that requires your consent or opt-in, this right does not apply in this case either.
                <p className=' text-xl mt-7 mb-2 font-bold text-blue-700 dark:text-white'> How can you contact us ?</p>


                If you have any questions, comments, or concerns about this privacy policy or our website, you can contact us at codingtutorials@website.com. We will respond to your inquiry as soon as possible and try to resolve any issues that you may have.
                <p className=' text-xl mt-7 mb-2 font-bold text-blue-700 dark:text-white'> Changes to this privacy policy</p>


                We may update this privacy policy from time to time to reflect any changes in our practices or legal obligations. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.
                <p className='mt-8 font-bold'> This privacy policy was last updated on July 27th, 2023.</p>
            </div>
        </MainLayout>
    );
};

export default privacypolicy;