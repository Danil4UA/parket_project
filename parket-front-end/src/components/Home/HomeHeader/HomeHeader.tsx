import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <div className="HomePage_wrapper">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: "/assets/3d-rendering-loft-luxury-living-room-with-bookshelf.jpg", speed: -20 },
            {
              children: (
                <div className="HomeHeader__wrapper">
                  <div className="HomeHeader__content">
                    <p>for residential & trade customers</p>
                    <h1 className="HomeHeader__title">
                      <span>PREMIUM</span>
                      <br />
                      <span>EFFECT PARQUET</span>
                    </h1>
                    <div>
                      Luxury wood flooring at guaranteed lowest UK prices backed by price match promise. Order free samples, buy online or
                      use our bespoke flooring service.
                    </div>
                    <div className="HomeHeader_btn_container">
                      <button className="HomeHeader_btn">VIEW PRODUCTS</button>
                    </div>
                  </div>
                </div>
              ),
              speed: 10
            }
          ]}
          className="HomeHeader"
        />
      </ParallaxProvider>
    </div>
  );
};

export default HomeHeader;
