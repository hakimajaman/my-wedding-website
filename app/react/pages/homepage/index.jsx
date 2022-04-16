import "../../../assets/styles/index.css";
import React from "react";
import Button from "../../components/Button";
import Banner from "../../components/Banner";
import BannerImage from "../../../assets/images/banner.png";
import TitleImage from "../../../assets/images/title.png";
import Section from "../../components/Section";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";

const HomePage = () => {
  const onClickButton = (e) => {
    e.preventDefault();
    window.location.href = "#section-undangan";
  };

  return (
    <>
      <Banner
        bannerImage={BannerImage}
        bannerImageAlt={
          "https://www.google.co.id/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fbeautiful-view&psig=AOvVaw2-x3G_K98nQ5sFNdgYgxRt&ust=1649658052207000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMDk5qPtiPcCFQAAAAAdAAAAABAD"
        }
        description={"walimatul 'urs"}
        titleImage={TitleImage}
        titleImageAlt={"Hakim&Aqilla"}
        button={<Button name={"UNDANGAN"} onClick={(e) => onClickButton(e)} />}
      />
      <Section component={<SectionOne />} sectionId={"undangan"} />
      <Section component={<SectionTwo />} />
      <Section component={<SectionThree />} />
      <Section component={<SectionFour />} customMarginClassName={"mt-10"} />
      <Section component={<SectionFive />} />
      <Section component={<SectionSix />} />
    </>
  );
};

export default HomePage;
