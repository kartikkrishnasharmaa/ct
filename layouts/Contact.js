import { BsArrowRightShort } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ImageFallback from "./components/ImageFallback";
// import emailjs from 'emailjs';
import Head from "next/head";


const Contact = () => {
  // const [ name, setName ] = useState( '' );
  // const [ email, setEmail ] = useState( '' );
  // const [ subject, setSubject ] = useState( '' );
  // const [ message, setMessage ] = useState( '' );

  // const handleSubmit = ( event ) => {
  //   event.preventDefault();

  //   // Send the form data using emailjs
  //   const templateParams = {
  //     from_name: name,
  //     from_email: email,
  //     subject: subject,
  //     message_html: message,
  //   };

  //   emailjs
  //     .send(
  //       'service_04rs9xh', // Replace with your email service ID
  //       'template_8wrmnp8', // Replace with your email template ID
  //       templateParams,
  //       'UGfE-J9lqfYu6gaoi' // Replace with your email user ID
  //     )
  //     .then(
  //       ( response ) => {
  //         console.log( 'Email sent successfully!', response );
  //         // Clear the form
  //         setName( '' );
  //         setEmail( '' );
  //         setSubject( '' );
  //         setMessage( '' );
  //       },
  //       ( error ) => {
  //         console.error( 'Error sending email:', error );
  //       }
  //     );
  // };


  return (
    <>
      <Head>
        <title>Contact Us | Coding Tutorials</title>
        <meta name="description" content="contact us page" />
        <meta name="keywords" content="contact us" />
        <link rel="canonical" href="https://codingtutorials.in/contact" />
        <meta property="og:title" content="contact us | Coding Tutorials" />
        <meta property="og:description" content="contact us" />
        <meta property="og:url" content="https://codingtutorials.in/contact" />
        <meta property="og:site_name" content="Coding Tutorials" />
        <meta property="og:image" content="https://codingtutorials.in/images/logo.png" />
        <meta property="og:image:secure_url" content="https://codingtutorials.in/images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Coding Tutorials" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="contact us | Coding Tutorials" />
        <meta name="twitter:description" content="contact us" />
        <meta name="twitter:url" content="https://codingtutorials.in/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://codingtutorials.in/images/logo.png" />
        <meta name="twitter:image:src" content="https://codingtutorials.in/images/logo.png" />
        <meta name="twitter:image:alt" content="Coding Tutorials" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>
      <section className="section lg:mt-16">
        <div className="container">
          <div className="row">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeZQTlWqLFEfmJALeRIK_hMpIMO5FvL8pJky0J5nrVRpad-4g/viewform?embedded=true" width="auto" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

          </div>
          <div className="row justify-center">
            <div className="md:col-6 lg:col-4">
              <div

                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:text-white"
              >
                <FaEnvelope />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  codingtutorials.in@gmail.com
                </p>
              </div>
            </div>
            <div className="md:col-6 lg:col-4">
              <span
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:text-white"
              >
                <FaMapMarkerAlt />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  India
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
