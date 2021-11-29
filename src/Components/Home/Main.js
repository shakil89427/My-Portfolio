import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Mainwork from "./MainWork/Mainwork";
import Experiences from "./Experiences/Experiences";
import Recent from "./Recent/Recent";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Mainwork></Mainwork>
      <Experiences></Experiences>
      <Recent></Recent>
    </div>
  );
};

export default Main;
