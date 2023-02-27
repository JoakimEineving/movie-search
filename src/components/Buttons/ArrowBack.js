import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Buttons.scss";

const ArrowBack = () => {
  const [show, setShow] = useState(false);
  const handleBack = () => {
    window.history.back();
  };
  useEffect(() => {
    if (window.location.pathname !== "/") {
      setShow(true);
    }
  }, []);
  return (
    <span>
      {show && (
        <FontAwesomeIcon
          className="back-arrow"
          icon={faArrowLeft}
          onClick={handleBack}
        />
      )}
    </span>
  );
};

export default ArrowBack;
