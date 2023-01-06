import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';

import NotFound from '../assets/25.svg';

// import NavHeaderLanding from '../components/NavBarLanding';
// import { postData } from '../api';

const Coming = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value
    });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     postData(`${process.env.REACT_APP_BACKEND_URL}/mailing-list`, user);
  //     setUser({ name: '', email: '' });
  //   };

  const handleGoBack = (e) => {
    navigate('/feed');
  };

  let { pageType } = useParams();
  const booksession = pageType === 'booksession';

  return (
    <>
      {/* <NavHeaderLanding /> */}
      <div className="relative flex flex-col px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full bg-lightgraybg  lg:h-screen">
        {/* <button
                      type=''
                      className='inline-flex items-center justify-center h-12 px-6 mr-6 font-semibold  tracking-wide text-white transition duration-200 rounded shadow-md bg-darkerblue hover:bg-navyblue focus:shadow-outline focus:outline-noone'
                    >
                        <Link to='/feed'>
                        Go Back
                        </Link>
                     
                    </button> */}
        <div className="flex justify-center h-full lg:-mx-10 mb-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-7 lg:left-0 lg:items-center">
          <img
            src={NotFound}
            className="object-cover object-left w-10/12 h-auto lg:w-9/12 lg:h-auto"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto lg:pr-10 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div></div>
              {pageType ? (
                <>
                  <h2 className="max-w-lg mb-6   text-3xl font-bold tracking-tight text-charcoal sm:text-4xl sm:leading-none">
                    Reach out to us.
                  </h2>
                  <p className="font-semibold  text-charcoal text-lg md:text-lg mb-2">
                    This page is currently unavailable. However,{' '}
                    <br className="hidden md:block" />
                    you can still{' '}
                    {booksession
                      ? ` book a session`
                      : 'set up a live chat'}{' '}
                    through the following means.
                  </p>
                  <div className="grid lg:grid-cols-2 grid-cols-1">
                    <a
                      href="mailto: delvinfo@delvcareers.com"
                      aria-label="Send Email"
                      title="Send Email"
                      className="mb-2 inline-flex items-center justify-center h-12 px-6 mr-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-darkerblue hover:bg-navyblue focus:shadow-outline focus:outline-noone"
                    >
                      Send Email
                    </a>

                    <a
                      href="tel:077-600-7707"
                      aria-label="Our phone"
                      title="Our phone"
                      className="mb-2 inline-flex items-center justify-center h-12 px-6 mr-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-darkerblue hover:bg-navyblue focus:shadow-outline focus:outline-noone"
                    >
                      {`Call:  0776007707`}
                    </a>
                  </div>

                  {/* <p className='font-semibold  text-charcoal text-lg md:text-lg'>
                    <a
                      href='mailto: delvinfo@delvcareers.com'
                      aria-label='Send Email'
                      title='Send Email'
                      className='inline-flex items-center justify-center h-12 px-6 mr-6 font-semibold font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-darkerblue hover:bg-navyblue focus:shadow-outline focus:outline-noone'
                    >
                      Send Email
                    </a>
                    <br className='hidden md:block' />
                    Mobile:
                    <a
                      href='tel:850-123-5021'
                      aria-label='Our phone'
                      title='Our phone'
                      className='transition-colors duration-300 hover:text-navyblue'
                    >
                      +256776007707
                    </a>
                  </p> */}
                </>
              ) : (
                <>
                  <h2 className="max-w-lg mb-6   text-3xl font-bold tracking-tight text-charcoal sm:text-4xl sm:leading-none">
                    This page will be
                    <br className="hidden md:block" />
                    brought online{' '}
                    <span className="inline-block text-deep-purple-accent-400">
                      soon
                    </span>
                  </h2>
                  <p className="font-semibold  text-charcoal text-lg md:text-lg">
                    Reach out to us for more updates.{' '}
                    <br className="hidden md:block" />
                    Please Subscribe to our mailing list for regular updates.
                  </p>
                </>
              )}
            </div>
            {pageType ? (
              <></>
            ) : (
              <>
                <form>
                  <div className="flex flex-col md:flex-row">
                    <input
                      placeholder="Name"
                      required=""
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-lightgraybg  text-headingtext font-semibold border  border-linecolor rounded appearance-none md:mr-2 focus:border-darkerblue focus:outline-noone focus:shadow-outline"
                      name="name"
                    />
                    <input
                      placeholder="Email"
                      required=""
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-lightgraybg  text-headingtext font-semibold border  border-linecolor rounded appearance-none md:mr-2 focus:border-darkerblue focus:outline-noone focus:shadow-outline"
                      name="email"
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <button
                      type=""
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-semibold  tracking-wide text-white transition duration-200 rounded shadow-md bg-regal-orange hover:bg-navyblue focus:shadow-outline focus:outline-noone"
                    >
                      Subscribe
                    </button>

                    <button
                      onClick={handleGoBack}
                      type=""
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-semibold  tracking-wide text-white transition duration-200 rounded shadow-md bg-regal-orange hover:bg-navyblue focus:shadow-outline focus:outline-noone"
                    >
                      Go Back
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Coming;
