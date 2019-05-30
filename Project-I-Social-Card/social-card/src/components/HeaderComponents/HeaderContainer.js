import React from "react";

import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

import "./Header.scss";

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <ImageThumbnail />
      <div className="header-copy-container">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;
