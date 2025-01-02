import React from "react";
import "./SavedWatch.css";
const SavedWatch = (props) => {
  const { currentWatchDetails } = props;

  const urlSideviewImage = currentWatchDetails
    ? currentWatchDetails.urlSideview
    : null;

  const displayText = currentWatchDetails
    ? currentWatchDetails.displayText
    : null;

  const price = currentWatchDetails ? currentWatchDetails.price : null;

  return (
    <div className="container">
      <p className="new">New</p>
      <h1 className="text"> Buy {displayText}</h1>
      <p className="price1">{price}</p>
      <img className="length" src={urlSideviewImage} alt="12" />
    </div>
  );
};

export default SavedWatch;
