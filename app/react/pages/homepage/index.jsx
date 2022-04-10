import "../../../assets/styles/index.css";
import React from "react";
import Banner from "../../components/Banner";
import BannerImage from "../../../assets/images/banner.png";
import TitleImage from "../../../assets/images/title.png";

const HomePage = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomePage;
