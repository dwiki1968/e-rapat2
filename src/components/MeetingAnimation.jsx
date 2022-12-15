import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animationData.json";

const MeetingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={300} width={300} />
    </>
  );
};

export default MeetingAnimation;
