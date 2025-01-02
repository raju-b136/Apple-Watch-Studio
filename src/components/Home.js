import "./Home.css";

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="header">
        <img
          className="logo"
          src="https://store.storeimages.cdn-apple.com/4982
      /as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
          alt="logo"
        />
      </div>
      <div className="home-section">
        <p className="home-section-paragraph">Apple Watch Studio</p>
        <h1 className="home-section-heading">
          Choose a case.
          <br />
          Pick a band.
          <br />
          Create your own style.
        </h1>
        <Link to={"/watchDetails"}>
          <button className="button">Get started</button>
        </Link>
      </div>

      <img
        className="watch"
        src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLJ3ref_SR_S10_VW_PF+watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ZEtjMnQwRTFwMFpJcFR6T0QySW5EVE5MS0NHdU9pQ1oreFZMVHc2eWpaOUlWeG93YjFTbVpHWEo5KzB4cDMzN3B2QjR6TEZ4ZThxM3VqYkZobmlXM2xUSlh3SjBwc2dvdjExQkpUVUd0YnN1USs1b3UrbjRBN0I4YzZxZklZWjZNK3lsZE1HRkRZTjZSeEJXd0NXdmpoNzQyZmlkSVFmbjY5Y04rQ0tZTmFKSHU3NmZyQzBTVVZ5ZWlSanV5V2tOdkZ1emhkYWNycmJka1dOU01FKzNBcllyZWVpdkpPTHY3MlZadFg1My9uaUtQOUhDZ3lOdkpTWWtaMGxGM2FhSw"
        alt="watch"
      />
    </div>
  );
};

export default Home;
