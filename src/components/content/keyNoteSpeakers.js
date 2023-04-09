import React from "react";
import "../../styles/content_css/keynote_speaker.css";
import PageBanner from "../common/pageBanner";

const KeyNoteSpeakers = () => {
  return (
    <>
      <PageBanner pageTitle="Keynote Speakers" />
      <div className="keynote-main-container">
        <marquee>
          <h1>Will be updated soon......</h1>
        </marquee>
      </div>
    </>
  );
};
export default KeyNoteSpeakers;
