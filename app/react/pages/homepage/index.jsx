import "../../../assets/styles/index.css";
import React from "react";
import Banner from "../../components/Banner";
import BannerImage from "../../../assets/images/banner.png";
import TitleImage from "../../../assets/images/title.png";
import Section from "../../components/Section";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

const HomePage = () => {
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
        buttonName={"UNDANGAN"}
      />
      <Section component={<SectionOne />} />
      <Section component={<SectionTwo />} />
      <Section component={<SectionThree />} />
    </>
  );
};

export default HomePage;
