import React from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import Footer from "../components/Footer";
import NoticeBorder from "../components/NoticeBorder";
import CarouselBorder1 from "../components/CarouselBorder1";
import PageFragment1 from "../components/PageFragment1";

const HomeContent = () => {
  return (
    <>
      <HeaderNavBar/>
      <NoticeBorder/>
      <CarouselBorder1/> 
      <PageFragment1/> 
      <Footer/>
    </>
  );
};

export default HomeContent;