import React from 'react';

const StatusWrapper = ({
  title,
  closeModal,
  bodyContent,
  footer,
  size,
  footerContent,
  onMouseMove
}) => {
  return (
    <>
      <div className='modalClass justify-center items-start py-2 top-[85px] lg:py-4 flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none w-screen shadow-md '>
         <div
          className={`relative w-screen sm:w-9/12 md:w-7/12  mx-2 sm:mx-auto  ${
            size ? size : 'lg:w-6/12'
          }`}
          >
          {/*content*/}
          <div
            className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ${
              footer && 'h-[600px]'
            }`}
          >
            {/*header*/}
            <div className=' flex items-start justify-between px-8 pb-0 pt-0 rounded-t border-b border-linecolor'>
              <h3 className='text-xl font-sans font-bold text-charcoal'>
                {title}
              </h3>
              <button
                className='p-1 ml-auto  text-black float-right text-3xl leading-none font-semibold'
                onClick={closeModal}
              >
                <span className='text-charcoal h-6 w-6 text-2xl  hover:text-reddark'>
                  ×
                </span>
              </button>
            </div>

            {/*body*/}
            <div
              className={`relative px-0 pb-0 flex-auto pt-0 ${
                footer && 'overflow-y-auto h-8/12'
              }`}
            >
              {bodyContent}
            </div>
            {/*footer*/}
            {footer && (
              <div className=' flex flex-col  justify-between p-4 border-t border-linecolor'>
                {footerContent}
              </div>
            )}
          </div>
        </div>
      </div>
      <div onMouseMove={onMouseMove} className='modalOverlayClass opacity-90 fixed inset-0  bg-black '  ></div>
    </>
  );
};

export default StatusWrapper;
