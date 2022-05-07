import "../../../assets/styles/index.css";
import React, { useState } from "react";
import Button from "../../components/base/Button";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import BannerImage from "../../../assets/images/banner.png";
import TitleImage from "../../../assets/images/title.png";
import Section from "../../components/Section";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Footer from "../../components/Footer";

const HomePage = () => {
  const onClickButton = (e) => {
    e.preventDefault();
    window.location.href = "#section-undangan";
  };

  const [english, setEnglish] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleLanguage = () => {
    setEnglish(!english);
  };

  const onSendMessage = (name, message) => {
    const cloneMessages = messages;
    if (name.length > 0 && message.length > 0) {
      cloneMessages.push({
        name: name,
        message: message,
      });
      setMessages(cloneMessages);
    }
  };

  return (
    <>
      <Header isEnglish={english} handleButton={handleLanguage} />
      <Banner
        bannerImage={BannerImage}
        bannerImageAlt={
          "https://www.google.co.id/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fbeautiful-view&psig=AOvVaw2-x3G_K98nQ5sFNdgYgxRt&ust=1649658052207000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMDk5qPtiPcCFQAAAAAdAAAAABAD"
        }
        description={"walimatul 'urs"}
        titleImage={TitleImage}
        titleImageAlt={"Hakim&Aqilla"}
        button={
          <Button onClick={(e) => onClickButton(e)}>
            {english ? "INVITATION" : "UNDANGAN"}
          </Button>
        }
      />
      <Section sectionId={"undangan"}>
        <Section1 isEnglish={english} />
      </Section>
      <Section>
        <Section2 isEnglish={english} />
      </Section>
      <Section>
        <Section3 isEnglish={english} />
      </Section>
      <Section customMarginClassName={"mt-10"}>
        <Section4 isEnglish={english} />
      </Section>
      <Section>
        <Section5 isEnglish={english} />
      </Section>
      <Section>
        <Section6 isEnglish={english} />
      </Section>
      <Section>
        <Section7 isEnglish={english} handleSend={onSendMessage} />
      </Section>
      {messages.length > 0 ? (
        <Section>
          <Section8 isEnglish={english} messages={messages} />
        </Section>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
};

export default HomePage;
