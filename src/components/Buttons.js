import React, { useEffect, useState } from "react";
import "./Buttons.css";
import SavedWatch from "./SavedWatch";

const Buttons = ({
  showSizeDetailsComponent,
  showCaseDetailsComponent,
  showBandsDetailsComponent,
  getSize,
  gcifdc,
  activeOptionId,
  getCase,
  getBand,
}) => {
  const [selectedSize, setSelectedSize] = useState("42mm");
  const [selectedCase, setSelectedCase] = useState("aluminium");
  const [selectedBand, setSelectedBand] = useState("Solo Loop");
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    changeselectedSize(gcifdc);
  }, [gcifdc]);

  useEffect(() => {
    changeselectedCase(gcifdc);
  }, [gcifdc]);

  useEffect(() => {
    changeselectedBand(gcifdc);
  }, [gcifdc]);

  const changeselectedSize = (gcifdc) => {
    if (gcifdc === 0) {
      setSelectedSize("42mm");
    } else {
      setSelectedSize("46mm");
    }
  };

  const changeselectedCase = (gcifdc) => {
    if (gcifdc === 0 || 1 || 2) {
      setSelectedCase("aluminium");
    } else {
      setSelectedCase("titanium");
    }
  };

  const changeselectedBand = (gcifdc) => {
    switch (gcifdc) {
      case 6:
        return setSelectedBand("Stainless Steel");

      case 10:
        return setSelectedBand("Sport Loop");

      case 1:
        return setSelectedBand("Sport Band");

      case 11:
        return setSelectedBand("FineWoven");

      case 2:
        return setSelectedBand("Braided Solo Loop");

      case 4:
        return setSelectedBand("Solo Loop");

      case 5:
        return setSelectedBand("Nike Sport Loop");

      case 13:
        return setSelectedBand("Nike Sport Band");

      case 12:
        return setSelectedBand("BandHermès Toile H");

      case 5:
        return setSelectedBand("Hermès Torsade");

      case 9:
        return setSelectedBand("Hermès Kilim");

      case 0:
        return setSelectedBand("Hermès Grand H");

      default:
        return null;
    }
  };

  const activeOptionIdSize = activeOptionId === "SE";

  const showComponent = (buttonName) => {
    if (buttonName === "Size") {
      showSizeDetailsComponent();
    } else if (buttonName === "Case") {
      showCaseDetailsComponent();
    } else {
      showBandsDetailsComponent();
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
    showComponent(buttonName);
  };

  const handleSizeSelect = (size, event) => {
    event.stopPropagation(); // Prevent button click
    setSelectedSize(size);
    if (size === "42mm") {
      getSize(0);
    } else {
      getSize(1);
    }
  };

  const handleCaseSelect = (caseName, event) => {
    event.stopPropagation();
    setSelectedCase(caseName);
    if (caseName === "aluminium") {
      getCase(0);
    } else {
      getCase(3 || 0);
    }
  };

  const handleCaseSelectTI = (caseName, event) => {
    event.stopPropagation();
    setSelectedCase(caseName);
    if (caseName === "titanium") {
      getCase(0);
    }
  };

  const handleBandSelect = (band, event) => {
    event.stopPropagation();
    setSelectedBand(band);
    switch (band) {
      case "Stainless Steel":
        return getBand(6);

      case "Sport Loop":
        return getBand(10);

      case "Sport Band":
        return getBand(1);

      case "FineWoven":
        return getBand(11);

      case "Braided Solo Loop":
        return getBand(2);

      case "Solo Loop":
        return getBand(4);

      case "Nike Sport Loop":
        return getBand(5);

      case "Nike Sport Band":
        return getBand(13);

      case "Hermès Toile H":
        return getBand(12);

      case "Hermès Torsade":
        return getBand(5);

      case "Hermès Kilim":
        return getBand(9);

      case "Hermès Grand H":
        return getBand(0);

      default:
        return null;
    }
  };

  const A = () => {
    if (activeOptionId === "Series") {
      return (
        <>
          <span
            className={`option ${
              selectedCase === "aluminium" ? "selected" : ""
            }`}
            onClick={(event) => handleCaseSelect("aluminium", event)}
          >
            aluminium
          </span>
          <span
            className={`option ${
              selectedCase === "titanium" ? "selected" : ""
            }`}
            onClick={(event) => handleCaseSelect("titanium", event)}
          >
            titanium
          </span>
        </>
      );
    } else if (activeOptionId === "Hermes") {
      return (
        <span
          className={`option ${selectedCase === "titanium" ? "selected" : ""}`}
          onClick={(event) => handleCaseSelectTI("titanium", event)}
        >
          titanium
        </span>
      );
    } else {
      return (
        <span
          className={`option ${selectedCase === "aluminium" ? "selected" : ""}`}
          onClick={(event) => handleCaseSelect("aluminium", event)}
        >
          aluminium
        </span>
      );
    }
  };

  const B = () => {
    if (activeOptionId === "Hermes") {
      return (
        <>
          <span
            className={`option ${
              selectedBand === "Hermès Toile H" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("Hermès Toile H", event)}
          >
            Hermès Toile H
          </span>
          <span
            className={`option ${
              selectedBand === "Hermès Torsade" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("Hermès Torsade", event)}
          >
            Hermès Torsade
          </span>
          <span
            className={`option ${
              selectedBand === "Hermès Kilim" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("Hermès Kilim", event)}
          >
            Hermès Kilim
          </span>
          <span
            className={`option ${
              selectedBand === "Hermès Grand H" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("Hermès Grand H", event)}
          >
            Hermès Grand H
          </span>
        </>
      );
    } else {
      return (
        <>
          <span
            className={`option ${
              selectedBand === "Stainless Steel" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("Stainless Steel", event)}
          >
            Stainless Steel
          </span>
          <span
            className={`option ${
              selectedBand === "Sport Loop" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("Sport Loop", event)}
          >
            Sport Loop
          </span>
          <span
            className={`option ${
              selectedBand === "Sport Band" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("Sport Band", event)}
          >
            Sport Band
          </span>
          <span
            className={`option ${
              selectedBand === "FineWoven" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("FineWoven", event)}
          >
            FineWoven
          </span>
          <span
            className={`option ${
              selectedBand === "Braided Solo Loop" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("Braided Solo Loop", event)}
          >
            Braided Solo Loop
          </span>
          <span
            className={`option ${
              selectedBand === "Solo Loop" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("Solo Loop", event)}
          >
            Solo Loop
          </span>
          <span
            className={`option ${
              selectedBand === "Nike Sport Loop" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("Nike Sport Loop", event)}
          >
            Nike Sport Loop
          </span>
          <span
            className={`option ${
              selectedBand === "Nike Sport Band" ? "selected" : ""
            }`}
            onClick={(event) => handleBandSelect("Nike Sport Band", event)}
          >
            Nike Sport Band
          </span>
        </>
      );
    }
  };

  return (
    <div className="app-container">
      <div className="button-container">
        <button
          className={`option-button ${
            activeButton === "Size" ? "active" : ""
          } size`}
          onClick={() => handleButtonClick("Size")}
        >
          {activeButton === "Size" ? (
            <>
              <span
                className={`option ${
                  selectedSize === "42mm" ? "selected" : ""
                }`}
                onClick={(event) => handleSizeSelect("42mm", event)}
              >
                {activeOptionIdSize ? "40mm" : "42mm"}
              </span>
              <span
                className={`option ${
                  selectedSize === "46mm" ? "selected" : ""
                }`}
                onClick={(event) => handleSizeSelect("46mm", event)}
              >
                {activeOptionIdSize ? "44mm" : "46mm"}
              </span>
            </>
          ) : (
            "Size"
          )}
        </button>

        <button
          className={`option-button ${activeButton === "Case" ? "active" : ""}`}
          onClick={() => handleButtonClick("Case")}
        >
          {activeButton === "Case" ? A() : "Case"}
        </button>

        <button
          className={`option-button ${activeButton === "Band" ? "active" : ""}`}
          onClick={() => handleButtonClick("Band")}
        >
          {activeButton === "Band" ? B() : "Band"}
        </button>
      </div>
      <div className="hide-save-component-1">
        <SavedWatch gcifdc={gcifdc} />;
      </div>
    </div>
  );
};

export default Buttons;
