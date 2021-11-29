import React from "react";
import Banner from "./Banner/Banner";
import Mainwork from "./MainWork/Mainwork";
import Experiences from "./Experiences/Experiences";
import Recent from "./Recent/Recent";
import Contact from "./Contact/Contact";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Top from "../Footer/Top";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Mainwork></Mainwork>
      <Experiences></Experiences>
      <Recent></Recent>
      <Contact></Contact>
      <Footer></Footer>
      <Top></Top>
    </div>
  );
};

export default Main;
