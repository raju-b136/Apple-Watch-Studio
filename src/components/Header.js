import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = ({ getActiveOptionId, saveWatch }) => {
  const sortbyOptions = [
    { optionId: "Series", displayText: "Apple Watch Series 10" },
    { optionId: "Hermes", displayText: "Apple Watch Hermes Series 10" },
    { optionId: "SE", displayText: "Apple Watch SE" },
  ];
  const [textView, setTextView] = useState(true);
  const [activeOptionId, setActiveOptionId] = useState(
    sortbyOptions[0].optionId
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const ViewText = textView ? "Save" : "Back";

  getActiveOptionId(activeOptionId);

  const onSave = () => {
    setTextView(!textView);
    saveWatch();
  };

  const onOptionSelect = (optionId) => {
    if (optionId !== activeOptionId) {
      setActiveOptionId(optionId);
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="header">
      <img
        className="logo"
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
        alt="Apple Watch"
      />
      {textView && (
        <div className="custom-dropdown" ref={dropdownRef}>
          <div className="dropdown-header" onClick={toggleDropdown}>
            <span>Collections</span>
            <span className="arrow">{isDropdownOpen ? "▲" : "▾"}</span>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-container">
              <div
                className="overlay"
                onClick={() => setIsDropdownOpen(false)}
              />
              <ul className="dropdown-list open">
                {sortbyOptions.map((eachOption) => (
                  <li
                    key={eachOption.optionId}
                    className={`dropdown-item ${
                      eachOption.optionId === activeOptionId ? "disabled" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onOptionSelect(eachOption.optionId);
                    }}
                  >
                    {eachOption.displayText}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <button
        onClick={() => {
          onSave();
        }}
        className="button"
      >
        {ViewText}
      </button>
    </div>
  );
};

export default Header;
