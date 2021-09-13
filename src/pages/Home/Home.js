import React from "react";
import Header from "../../components/Header/Header";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Marquee from "../../components/Marquee/Marquee";
import HomeBody from "../../components/HomeBody/HomeBody";

const Home = () => {
  return (
    <>
      <Header></Header>
      <MainNavbar></MainNavbar>
      <Marquee></Marquee>
      <MainCarousel></MainCarousel>
      <HomeBody></HomeBody>
    </>
  );
};

export default Home;
