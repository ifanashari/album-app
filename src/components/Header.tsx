import React from "react";
import "../assets/css/header.css";

interface HeaderProps {
  title: string;
  subTitle?: string;
}

const Header: React.SFC<HeaderProps> = ({ title, subTitle }) => {
  console.log(subTitle);
  return (
    <React.Fragment>
      <div className="header w-100 py-5 mb-3">
        <div className="m-auto text-center">
          <h1>{title}</h1>
          <h3 className="mb-0">{subTitle}</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
