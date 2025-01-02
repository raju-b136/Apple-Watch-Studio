import React, { useEffect, useState } from "react";
import "./SizeDetails.css";
import WatchDetails from "./WatchDetails";

const SizeDetails = ({
  filteredWatchDetailsList,
  filteredObjectWatchImages,
  getCurrentIndexFromSizeDetails,
  index,
}) => {
  const { urlFrontview, urlSideview } = filteredObjectWatchImages;
  const wacthImage = urlFrontview;
  const watchSideViewImage = urlSideview;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSideViewImage, setIsSideViewImage] = useState(false);

  useEffect(() => {
    changeCurrentIndex(index);
  }, [index]);

  const changeCurrentIndex = (index) => {
    setCurrentIndex(index);
  };

  const changeSortby = () => {
    setIsSideViewImage(!isSideViewImage);
  };

  const filteredList = filteredWatchDetailsList.filter(
    (eachOption) => eachOption.id === currentIndex
  );
  const filteredObject = filteredList[0];

  getCurrentIndexFromSizeDetails(filteredObject);

  const moveLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const moveRight = () => {
    if (currentIndex < filteredWatchDetailsList.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getVisibleBands = () => {
    if (currentIndex === 0) {
      return (
        <div>
          <img
            onClick={() => {
              setCurrentIndex(0);
              setIsSideViewImage(false);
            }}
            className="band3-1"
            src={watchSideViewImage}
            alt="0"
          />
          <img
            onClick={() => {
              setCurrentIndex(1);
              setIsSideViewImage(false);
            }}
            className="band3"
            src={wacthImage}
            alt="1"
          />
        </div>
      );
    } else {
      return (
        <div>
          <img
            onClick={() => {
              setCurrentIndex(0);
              setIsSideViewImage(false);
            }}
            className="band3-1"
            src={wacthImage}
            alt="0"
          />
          <img
            onClick={() => {
              setCurrentIndex(1);
              setIsSideViewImage(false);
            }}
            className="band3"
            src={watchSideViewImage}
            alt="1"
          />
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <div className="carousel-container3">
          {currentIndex > 0 && (
            <button
              className={
                isSideViewImage ? "watchBandHide3" : "carousel-button3 left3"
              }
              onClick={moveLeft}
            >
              &lt;
            </button>
          )}
          <div
            className={`carousel3 ${
              currentIndex === 0
                ? "left-space-2"
                : currentIndex === 1
                ? "right-space-2"
                : ""
            }`}
          >
            {isSideViewImage ? (
              getVisibleBands()
            ) : (
              <div>
                <img
                  onClick={() => {
                    setCurrentIndex(0);
                    setIsSideViewImage(false);
                  }}
                  className="band3-1"
                  src={wacthImage}
                  alt="0"
                />
                <img
                  onClick={() => {
                    setCurrentIndex(1);
                    setIsSideViewImage(false);
                  }}
                  className="band3"
                  src={wacthImage}
                  alt="1"
                />
              </div>
            )}
          </div>
          {currentIndex < filteredWatchDetailsList.length - 1 && (
            <button
              className={
                isSideViewImage ? "watchBandHide3" : "carousel-button3 right3"
              }
              onClick={moveRight}
            >
              &gt;
            </button>
          )}
        </div>
      </div>
      <div className="details-Component3">
        <WatchDetails
          isSideViewImage={isSideViewImage}
          changeSortby={changeSortby}
          filteredObject={filteredObject}
        />
      </div>
    </div>
  );
};

export default SizeDetails;
