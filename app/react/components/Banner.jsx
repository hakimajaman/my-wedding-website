import React from "react";
import Button from "./Button";

const Banner = ({
  bannerImage,
  bannerImageAlt,
  titleImage,
  titleImageAlt,
  titleString,
  titleStringColorClassName,
  description,
  buttonName,
  buttonProps,
  ...props
}) => {
  return (
    <>
      <div
        className="h-60 bg-center bg-gray-200 flex flex-col justify-center items-center
	md:h-72
	lg:h-96
	xl:h-2/3
      "
        {...props}
      >
        {bannerImage ? (
          <div
            className="absolute h-60
	  md:h-72
	  lg:h-96
	  xl:h-2/3
	  "
          >
            <img
              src={bannerImage}
              className="object-fill h-full w-screen"
              alt={bannerImageAlt}
            />
          </div>
        ) : (
          <></>
        )}
        {titleImage ? (
          <div className="mb-0 z-10">
            {titleImage ? (
              <img
                className="w-28
			md:w-56
			lg:w-80
			xl:w-96
		"
                src={titleImage}
                alt={titleImageAlt ? titleImageAlt : ""}
              />
            ) : (
              <></>
            )}
          </div>
        ) : titleString ? (
          <h2 className={titleStringColorClassName}>{titleString}</h2>
        ) : (
          <></>
        )}
        {description ? (
          <div className="relative w-full ">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="font-google-figma-Parisienne tracking-wider text-xl text-white
	      	md:text-3xl
		lg:text-4xl
		xl:text-5xl
	      "
              >
                <h3>{description}</h3>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        {buttonName ? (
          <div className="relative bg-blue-500 w-full flex justify-center">
            <div
              className="absolute mt-10
	    	lg:mt-14
		    xl:mt-24
	    "
            >
              <Button name={buttonName} {...buttonProps} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Banner;
