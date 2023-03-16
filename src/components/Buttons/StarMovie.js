import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Buttons.scss";
import useStarMovie from "../../hooks/useStarMovie";

const StarMovie = ({ movie }) => {
  const [star, toggleStar] = useStarMovie({movie});

  return (
    <div>
      <FontAwesomeIcon
        className={`star ${star ? "starred" : "unstarred"}`}
        icon={faStar}
        onClick={toggleStar}
        title="Star this movie"
      />
    </div>
  );
};

export default StarMovie;
