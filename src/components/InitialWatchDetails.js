import React, { useState } from "react";
import "./InitialWatchDetails.css";
const InitialWatchDetails = (props) => {
  const [imageView, setImageView] = useState(true);
  const { filteredObject } = props;
  const { name, urlFrontview, urlSideview, displayText, price } =
    filteredObject;

  const imageViewUrl = imageView ? urlFrontview : urlSideview;
  const ViewText = imageView ? "Side view" : "Front view";

  console.log(urlFrontview);

  return (
    <div className="detailsContainer">
      <img className="watchImg" alt="img" src={imageViewUrl} />
      <p
        className="ViewText"
        onClick={() => {
          setImageView(!imageView);
        }}
      >
        {ViewText}
      </p>
      <p className="watchModel">{displayText}</p>
      <p className="watchName">{name}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default InitialWatchDetails;
