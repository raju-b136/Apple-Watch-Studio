import React, { useState } from "react";
import Header from "./Header";
import "./WholeDetails.css";
import Buttons from "./Buttons";
import InitialWatchDetails from "./InitialWatchDetails";
import BandDetails from "./BandDetails";
import {
  bandsList,
  optionsData,
  WatchFacesList,
  WatchDetails,
} from "../utils/constants";
import SizeDetails from "./SizeDetails";
import CaseDetails from "./CaseDetails";
import SavedWatch from "./SavedWatch";
const WholeDetails = () => {
  const optionsDataList = optionsData;

  const componentStatusConstants = {
    initialDetails: "INITIAL",
    sizeDetails: "Size",
    caseDetails: "Case",
    bandDetails: "Bands",
  };

  const [activeOptionId, setActiveOptionId] = useState("Series");
  const [currentWatchDetails, setcurrentWatchDetails] = useState(
    optionsDataList[0]
  );
  const [saveWatchDetails, setSaveWatchDetails] = useState(true);
  const [index, setIndex] = useState(0);
  const [gcifdc, setGcifdc] = useState(0);
  const [apiStatus, setApiStatus] = useState(
    componentStatusConstants.initialDetails
  );

  const getActiveOptionId = (activeOptionId) => {
    setActiveOptionId(activeOptionId);
  };

  const saveWatch = () => {
    setSaveWatchDetails(!saveWatchDetails);
  };

  const getCurrentIndexFromSizeDetails = (currentIndex) => {
    setGcifdc(currentIndex.id);
    setcurrentWatchDetails(currentIndex);
  };

  const getCurrentIndexFromCaseDetails = (currentIndex) => {
    setGcifdc(currentIndex.id);
    setcurrentWatchDetails(currentIndex);
  };

  const getCurrentIndexFromBandDetails = (currentIndex) => {
    setGcifdc(currentIndex.id);
    setcurrentWatchDetails(currentIndex);
  };

  const getSize = (size) => {
    setIndex(size);
  };

  const getCase = (caseName) => {
    setIndex(caseName);
  };

  const getBand = (bandName) => {
    setIndex(bandName);
  };

  const filteredList = optionsDataList.filter(
    (eachOption) => eachOption.optionId === activeOptionId
  );
  const filteredObject = filteredList[0];

  const filteredBandList = bandsList.filter(
    //from constants
    (eachOption) => eachOption.optionId === activeOptionId
  );

  const filteredWatchFacesList = WatchFacesList.filter(
    //from constants
    (eachOption) => eachOption.optionId === activeOptionId
  );

  const filteredWatchDetailsList = WatchDetails.filter(
    //from constants
    (eachOption) => eachOption.optionId === activeOptionId
  );

  const showSizeDetailsComponent = () => {
    setApiStatus(componentStatusConstants.sizeDetails);
  };

  const showCaseDetailsComponent = () => {
    setApiStatus(componentStatusConstants.caseDetails);
  };

  const showBandsDetailsComponent = () => {
    setApiStatus(componentStatusConstants.bandDetails);
  };

  const getWatchesPage = () => {
    switch (apiStatus) {
      case componentStatusConstants.initialDetails:
        return <InitialWatchDetails filteredObject={filteredObject} />;
      case componentStatusConstants.bandDetails:
        return (
          <BandDetails
            getCurrentIndexFromBandDetails={getCurrentIndexFromBandDetails}
            index={index}
            filteredBandList={filteredBandList}
            activeOptionId={activeOptionId}
          />
        );
      case componentStatusConstants.sizeDetails:
        return (
          <SizeDetails
            getCurrentIndexFromSizeDetails={getCurrentIndexFromSizeDetails}
            index={index}
            filteredObjectWatchImages={filteredObject}
            filteredWatchDetailsList={filteredWatchDetailsList}
          />
        );
      case componentStatusConstants.caseDetails:
        return (
          <CaseDetails
            getCurrentIndexFromCaseDetails={getCurrentIndexFromCaseDetails}
            index={index}
            filteredWatchFacesList={filteredWatchFacesList}
            activeOptionId={activeOptionId}
          />
        );
      default:
        return null;
    }
  };

  const mainComponent = () => {
    return (
      <div className="bandTopSection">
        <Header getActiveOptionId={getActiveOptionId} saveWatch={saveWatch} />
        <div className="bandBottomSection">
          {getWatchesPage()}
          <Buttons
            activeOptionId={activeOptionId}
            gcifdc={gcifdc} //getCurrentIndexFromDetailsComponent
            getSize={getSize}
            getCase={getCase}
            getBand={getBand}
            showSizeDetailsComponent={showSizeDetailsComponent}
            showCaseDetailsComponent={showCaseDetailsComponent}
            showBandsDetailsComponent={showBandsDetailsComponent}
          />
        </div>
      </div>
    );
  };

  const set = () => {
    return saveWatchDetails ? (
      mainComponent()
    ) : (
      <div>
        <Header getActiveOptionId={getActiveOptionId} saveWatch={saveWatch} />
        <SavedWatch currentWatchDetails={currentWatchDetails} />
      </div>
    );
  };

  return <div>{set()}</div>;
};

export default WholeDetails;
