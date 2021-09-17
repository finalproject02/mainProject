import React from "react";
import Header from "../../components/Header/Header";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import HomeBody from "../../components/HomeBody/HomeBody";

const Home = () => {
  return (
    <div className="bg-light">
      <Header></Header>
      <MainNavbar></MainNavbar>
      <MainCarousel></MainCarousel>
      <HomeBody></HomeBody>
    </div>
  );
};

export default Home;
