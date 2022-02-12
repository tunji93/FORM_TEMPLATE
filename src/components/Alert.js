import React from "react";
import "../styles/_Alert.scss";
import { RiErrorWarningLine } from "react-icons/ri";

const Alert = () => {
  return (
    <div className="alert">
      <span className="alert__icon">
        <RiErrorWarningLine size="2.5rem" />
      </span>
      <div className="alert__text">
        Tada! Get started with a free template. Can’t find what you are looking
        for? Search from the 1000+ available templates
      </div>
    </div>
  );
};

export default Alert;
