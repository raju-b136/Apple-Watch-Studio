import React, { useEffect, useState } from "react";
import "./CaseDetails.css";
import WatchDetails from "./WatchDetails";
import InitialWatchDetails from "./InitialWatchDetails";

const CaseDetails = ({
  activeOptionId,
  filteredWatchFacesList,
  index,
  getCurrentIndexFromCaseDetails,
}) => {
  const FacesList = filteredWatchFacesList;

  const ActiveIdConstants = {
    series: "Series",
    hermes: "Hermes",
    se: "SE",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSideViewImage, setIsSideViewImage] = useState(false);

  useEffect(() => {
    changeCurrentIndex(index);
  }, [index]);

  const changeCurrentIndex = (index) => {
    setCurrentIndex(index);
  };

  const filteredList = FacesList.filter(
    (eachOption) => eachOption.id === currentIndex
  );
  const filteredObject = filteredList[0];

  getCurrentIndexFromCaseDetails(filteredObject);

  const renderSEWatches = () => {
    const wacthBandImage =
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UGhXWnNyeDRvRlZiMTF1d1FwcFZxQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc";

    const changeSortby = () => {
      setIsSideViewImage(!isSideViewImage);
    };

    const filteredList = FacesList.filter(
      (eachOption) => eachOption.id === currentIndex
    );
    const filteredObject = filteredList[0];

    const moveLeft = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    const moveRight = () => {
      if (currentIndex < FacesList.length) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const changeImage = (firstIndex, secondIndex) => {
      const k = FacesList.slice(firstIndex, secondIndex);
      const M = FacesList[currentIndex].urlSideview;

      if (currentIndex === 0) {
        return [
          { id: k[0].id, urlFrontview: M },
          { id: k[1].id, urlFrontview: k[1].urlFrontview },
          { id: k[2].id, urlFrontview: k[2].urlFrontview },
        ];
      } else if (currentIndex === 1) {
        return [
          { id: k[0].id, urlFrontview: k[0].urlFrontview },
          { id: k[1].id, urlFrontview: M },
          { id: k[2].id, urlFrontview: k[2].urlFrontview },
        ];
      } else if (currentIndex === 2) {
        return [
          { id: k[0].id, urlFrontview: k[0].urlFrontview },
          { id: k[1].id, urlFrontview: k[1].urlFrontview },
          { id: k[2].id, urlFrontview: M },
        ];
      }
    };

    const giveBandSlice = (firstIndex, secondIndex) => {
      return isSideViewImage
        ? changeImage(firstIndex, secondIndex)
        : FacesList.slice(firstIndex, secondIndex);
    };

    const getVisibleBands = () => {
      switch (currentIndex) {
        case 0:
          return giveBandSlice(0, 3);

        case 1:
          return giveBandSlice(0, 3);

        case 2:
          return giveBandSlice(0, 3);

        default:
          return null;
      }
    };
    return (
      <div>
        <div>
          <div className="carousel-container2">
            {currentIndex > 0 && (
              <button
                className={
                  isSideViewImage ? "watchBandHide2" : "carousel-button2 left2"
                }
                onClick={moveLeft}
              >
                &lt;
              </button>
            )}
            <div
              className={`carousel2 ${
                currentIndex === 0
                  ? "left-space-3"
                  : currentIndex === 2
                  ? "right-space-3"
                  : ""
              }`}
            >
              {getVisibleBands().map((band) => (
                <div
                  key={band.id}
                  onClick={() => {
                    setCurrentIndex(band.id);
                    setIsSideViewImage(false);
                  }}
                  className="band2"
                >
                  <img src={band.urlFrontview} alt={band.optionId} />
                </div>
              ))}
            </div>
            {currentIndex < FacesList.length - 1 && (
              <button
                className={
                  isSideViewImage ? "watchBandHide2" : "carousel-button2 right2"
                }
                onClick={moveRight}
              >
                &gt;
              </button>
            )}
          </div>

          <img className="watchband2" src={wacthBandImage} alt="watch" />
        </div>
        <div className="details-Component2">
          <WatchDetails
            isSideViewImage={isSideViewImage}
            changeSortby={changeSortby}
            filteredObject={filteredObject}
          />
        </div>
      </div>
    );
  };

  const renderHermesWatches = () => {
    const FacesListOneObject = FacesList[0];

    return <InitialWatchDetails filteredObject={FacesListOneObject} />;
  };

  const renderSeriesWatches = () => {
    const wacthBandImage =
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM";
    const changeSortby = () => {
      setIsSideViewImage(!isSideViewImage);
    };

    const filteredList = FacesList.filter(
      (eachOption) => eachOption.id === currentIndex
    );
    const filteredObject = filteredList[0];

    const moveLeft = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    const moveRight = () => {
      if (currentIndex < FacesList.length) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const changeImage = (firstIndex, secondIndex) => {
      const k = FacesList.slice(firstIndex, secondIndex);
      const M = FacesList[currentIndex].urlSideview;

      if (currentIndex === 0) {
        return [
          { id: k[0].id, urlFrontview: M },
          { id: k[1].id, urlFrontview: k[1].urlFrontview },
          { id: k[2].id, urlFrontview: k[2].urlFrontview },
        ];
      } else if (currentIndex === 1) {
        return [
          { id: k[0].id, urlFrontview: k[0].urlFrontview },
          { id: k[1].id, urlFrontview: M },
          { id: k[2].id, urlFrontview: k[2].urlFrontview },
          { id: k[3].id, urlFrontview: k[3].urlFrontview },
        ];
      } else if (currentIndex === 4) {
        return [
          { id: k[0].id, urlFrontview: k[0].urlFrontview },
          { id: k[1].id, urlFrontview: k[1].urlFrontview },
          { id: k[2].id, urlFrontview: M },
          { id: k[3].id, urlFrontview: k[3].urlFrontview },
        ];
      } else if (currentIndex === 5) {
        return [
          { id: k[0].id, urlFrontview: k[0].urlFrontview },
          { id: k[1].id, urlFrontview: k[1].urlFrontview },
          { id: k[2].id, urlFrontview: M },
        ];
      } else {
        return [
          { id: k[0].id, urlFrontview: k[0].urlFrontview },
          { id: k[1].id, urlFrontview: k[1].urlFrontview },
          { id: k[2].id, urlFrontview: M },
          { id: k[3].id, urlFrontview: k[3].urlFrontview },
          { id: k[4].id, urlFrontview: k[4].urlFrontview },
        ];
      }
    };

    const giveBandSlice = (firstIndex, secondIndex) => {
      return isSideViewImage
        ? changeImage(firstIndex, secondIndex)
        : FacesList.slice(firstIndex, secondIndex);
    };

    const getVisibleBands = () => {
      switch (currentIndex) {
        case 0:
          return giveBandSlice(0, 3);

        case 1:
          return giveBandSlice(0, 4);

        case 2:
          return giveBandSlice(0, 5);
        case 3:
          return giveBandSlice(1, 6);

        case 4:
          return giveBandSlice(2, 6);

        case 5:
          return giveBandSlice(3, 6);

        default:
          return null;
      }
    };
    return (
      <div>
        <div>
          <div>
            <div className="carousel-container2">
              {currentIndex > 0 && (
                <button
                  className={
                    isSideViewImage
                      ? "watchBandHide2"
                      : "carousel-button2 left2"
                  }
                  onClick={moveLeft}
                >
                  &lt;
                </button>
              )}
              <div
                className={`carousel2 ${
                  currentIndex === 0
                    ? "left-space-6"
                    : currentIndex === 1
                    ? "left-space-6-1"
                    : currentIndex === 5
                    ? "right-space-6"
                    : currentIndex === 4
                    ? "right-space-6-1"
                    : ""
                }`}
              >
                {getVisibleBands().map((band) => (
                  <div
                    key={band.id}
                    onClick={() => {
                      setCurrentIndex(band.id);
                      setIsSideViewImage(false);
                    }}
                    className="band2"
                  >
                    <img src={band.urlFrontview} alt={band.optionId} />
                  </div>
                ))}
              </div>
              {currentIndex < FacesList.length - 1 && (
                <button
                  className={
                    isSideViewImage
                      ? "watchBandHide2"
                      : "carousel-button2 right2"
                  }
                  onClick={moveRight}
                >
                  &gt;
                </button>
              )}
            </div>

            <img className="watchband2" src={wacthBandImage} alt="watch" />
          </div>
          <div className="details-Component2">
            <WatchDetails
              isSideViewImage={isSideViewImage}
              changeSortby={changeSortby}
              filteredObject={filteredObject}
            />
          </div>
        </div>
      </div>
    );
  };

  const get = () => {
    switch (activeOptionId) {
      case ActiveIdConstants.series:
        return renderSeriesWatches();
      case ActiveIdConstants.hermes:
        return renderHermesWatches();
      case ActiveIdConstants.se:
        return renderSEWatches();
      default:
        return null;
    }
  };

  return <div>{get()}</div>;
};

export default CaseDetails;
