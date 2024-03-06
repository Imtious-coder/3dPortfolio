import React from "react";
import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue-glass py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Imtious Islam</span>👋
        <br />A Web Developer based in Bangladesh.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          More then 3.5+ years of experience
          <br />
          in Web Development field.
        </p>

        <Link
          to="/about"
          className="neo-brutalism-white neo-btn duration-300 hover:scale-105"
        >
          View Details
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Successfully led numerous projects over the years. Interested in
          exploring their impact?
        </p>

        <Link
          to="/projects"
          className="neo-brutalism-white neo-btn duration-300 hover:scale-105"
        >
          View my Project's
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need to talk with me? <br /> I'm just a few keystrokes away
        </p>

        <Link
          to="/contact"
          className="neo-brutalism-white neo-btn duration-300 hover:scale-105"
        >
          Let's talk
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
