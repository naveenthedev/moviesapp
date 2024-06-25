import React from "react";
import "./MovieCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceHolderImage from "./images/placeholder_for_missing_posters.png"

const MovieCard = (props) => {
  const API_IMG = "https://test.create.diagnal.com/images/";
  return (
    <div className="postercard">
      <div className="poster">
        <LazyLoadImage
        src={API_IMG + props?.["poster-image"]}
        PlaceholderSrc={PlaceHolderImage}
        alt={PlaceHolderImage}
        />
      </div>

      <div className="info">
        <p className="title">{props.name}</p>
      </div>
    </div>
  );
};

export default MovieCard;
