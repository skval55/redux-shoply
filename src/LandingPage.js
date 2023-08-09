import React from "react";
import landingPageImg from "./img/copy-shoply-landing-page-min.jpg";
import downArrowIcon from "./img/icons8-arrow-down-96.png";
import { AnimateKeyframes } from "react-simple-animate";

const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${landingPageImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "70vh",
  };

  const textShadow = {
    textShadow: "1px 1px 2px black",
  };

  return (
    <>
      <div className="flex" style={backgroundStyle}>
        <div className="bg-gradient-to-t from-base-100 w-full h-full m-auto flex justify-center content-end flex-col ">
          <h2 style={textShadow} className="text-6xl text-gray-200">
            WHAT'S NEW!
          </h2>
          <p style={textShadow} className="text-xl text-gray-200">
            All new Awesome Stuff!
          </p>

          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              Go to cart
            </label>
          </div>
        </div>
      </div>
      <p className="text-3xl uppercase font-light text-black">
        Check out our selection!
      </p>
      <div className="w-full my-auto text-6xl pt-6" style={{ height: "20vh" }}>
        <AnimateKeyframes
          play
          delay={1}
          duration={1}
          direction="alternate"
          keyframes={[
            "transform: translateY(0)",
            "transform: translateY(10px)",
          ]}
          iterationCount="infinite"
        >
          <img className="m-auto" src={downArrowIcon} alt="down arrow" />
        </AnimateKeyframes>
      </div>
    </>
  );
};
export default LandingPage;
