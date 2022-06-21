import React from 'react';

function ServiceLayout({ title, text, photo, position }) {
  return (
    <div className="relative w-full h-80 mb-12 md:h-96 md:mb-16 mt-6">
      <div className="service-text w-4/5 bg-white absolute -top-12 z-10 left-1/2 -translate-x-1/2 p-3 lg:p-10 lg:-top-9 shadow-3xl ">
        <h3 className="text-2xl xl:text-4xl font-semibold mb-3">{title}</h3>
        <p className="text-l xl:text-2xl leading-6">{text}</p>
      </div>
      <div
        className={
          position === 'left'
            ? 'service-img absolute w-full sm:left-0 lg:w-3/4 lg:h-5/6'
            : 'service-img absolute w-full sm:right-0 max-w-xl w-full lg:w-3/4 lg:h-5/6'
        }
      >
        <img
          src={photo}
          alt="imgService"
          className="shadow-3xl h-72 w-full max-w-2xl md:w-100 lg:h-96"
        />
      </div>
    </div>
  );
}

export default ServiceLayout;
