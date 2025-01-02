import React, { useEffect, useState } from "react";
import "./WatchDetails.css";

const WatchDetails = (props) => {
  const [imageView, setImageView] = useState(true);
  const { filteredObject, changeSortby, isSideViewImage } = props;
  const { name, id, displayText, price } = filteredObject;

  const ViewText = imageView ? "Side view" : "Front view";

  useEffect(() => {
    changeCurrentimageView(isSideViewImage);
  }, [isSideViewImage]);

  const changeCurrentimageView = (isSideViewImage) => {
    setImageView(isSideViewImage);
  };

  const onChangesortby = () => {
    changeSortby();
  };

  return (
    <div className="detailsContainer" key={id}>
      <p
        className="ViewText"
        onClick={() => {
          setImageView(!imageView);
          onChangesortby();
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

export default WatchDetails;
