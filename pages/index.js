import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Logo from "./assets/outcrowd.gif";
import Bars from "./assets/menu.png";
import WebDesign from "./assets/webdesign.jpeg";
import BrandingImage from "./assets/branding.png";
import DevelopmentImage from "./assets/pos.png";

export default function Home() {
  const [windowSize, setWindowSize] = React.useState(null);
  const [showCookies, setShowCookies] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Header = () => {
    return (
      <div
        style={{
          maxWidth: 1000,
          margin: "auto",
          height: 70,
          width: "100%",
          paddingLeft: 20,
          paddingRight: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: 18, color: "#000" }}>
          UPPR
        </div>
        <Image src={Bars} height="30" width="30" />
      </div>
    );
  };

  const Cookies = () => {
    return (
      <div
        style={{
          height: "auto",
          width: "100%",
          backgroundColor: "#FFF",
          paddingLeft: 20,
          paddingRight: 20,
          maxWidth: 800,
          margin: "auto",
          padding: 20,
        }}
      >
        <div
          style={{
            color: "#333",
            fontSize: 12,
            textAlign: "center",
            width: "100%",
          }}
        >
          We use cookies to improve your browsing experience
        </div>
        <div
          onClick={() => setShowCookies(!showCookies)}
          style={{
            cursor: "pointer",
            color: "#6DA3F3",
            fontSize: 12,
            textAlign: "center",
            width: "100%",
          }}
        >
          Accept All Cookies
        </div>
      </div>
    );
  };

  const Giphy = () => {
    return (
      <div
        style={{
          height: "auto",
          width: "100%",
          backgroundColor: "#000",
          padding: 20,
          display: "flex",
          padding: "50px 0",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            padding: 20,
            flexDirection: "column",
            alignItems: "center ",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: windowSize > 800 ? 50 : 33,
              color: "#fff",
            }}
          >
            Uppernodes
          </h1>
          <h2
            style={{
              marginTop: -10,
              fontSize: windowSize > 800 ? 26 : 16,
              color: "#fff",
              textAlign: "center",
            }}
          >
            We are a digital agency that designs and develops great products
          </h2>
        </div>
        <Image src={Logo} height="300" width="300" />
      </div>
    );
  };

  const Webdesign = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          maxWidth: 800,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          padding: "50px 20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: windowSize > 800 ? 22 : 18,
            color: "#000",
          }}
        >
          What we do best
        </div>

        <div
          style={{
            marginTop: 20,
            fontWeight: "bold",
            fontSize: windowSize > 800 ? 45 : 30,
            color: "#000",
          }}
        >
          Web Design
        </div>
        <h2
          style={{
            fontSize: windowSize > 800 ? 26 : 16,
            color: "#999",
            width: "70%",
            textAlign: "center",
          }}
        >
          We’re pretty sure everyone wants higher conversion rates and better
          recognition. Don’t worry, we got you covered!{" "}
        </h2>
        <a
          style={{
            marginBottom: 30,
            cursor: "pointer",
            fontSize: windowSize > 800 ? 26 : 18,
            color: "#6DA3F3",
            width: "70%",
            textAlign: "center",
          }}
        >
          Learn more
        </a>
        <Image src={WebDesign} width="450" height="300" />
      </div>
    );
  };

  const Branding = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          maxWidth: 800,
          margin: "auto",
          display: "flex",
          backgroundColor: "#FAFAFA",
          flexDirection: "column",
          padding: "50px 20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: 20,
            fontWeight: "bold",
            fontSize: windowSize > 800 ? 45 : 30,
            color: "#000",
          }}
        >
          Branding
        </div>
        <h2
          style={{
            fontSize: windowSize > 800 ? 26 : 16,
            color: "#999",
            width: "70%",
            textAlign: "center",
          }}
        >
          Sure, every brand is unique. The question is do your customers realize
          it? We’ll make sure they do.
        </h2>
        <a
          style={{
            marginBottom: 30,
            cursor: "pointer",
            fontSize: windowSize > 800 ? 26 : 18,
            color: "#6DA3F3",
            width: "70%",
            textAlign: "center",
          }}
        >
          Learn more
        </a>
        <Image src={BrandingImage} width="450" height="300" />
      </div>
    );
  };

  const Development = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          maxWidth: 800,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          padding: "50px 20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: 20,
            fontWeight: "bold",
            fontSize: windowSize > 800 ? 45 : 30,
            color: "#000",
          }}
        >
          Development
        </div>
        <h2
          style={{
            fontSize: windowSize > 800 ? 26 : 16,
            color: "#999",
            width: "70%",
            textAlign: "center",
          }}
        >
          Got an awesome idea? You’re halfway there! Now let us make a fully
          functioning product out of it.
        </h2>
        <a
          style={{
            marginBottom: 10,
            cursor: "pointer",
            fontSize: windowSize > 800 ? 26 : 18,
            color: "#6DA3F3",
            width: "70%",
            textAlign: "center",
          }}
        >
          Learn more
        </a>
        <Image src={DevelopmentImage} width="450" height="300" />
      </div>
    );
  };

  const Footer = () => {
    return (
      <div
        style={{
          height: "#FAFAFA",
          height: "auto",
          width: "100%",
          padding: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ fontWeight: "bold", color: "#000" }}>UPPR</div>
      </div>
    );
  };

  return (
    <>
      <Header />
      {showCookies && <Cookies />}
      <Giphy />
      <Webdesign />
      <Branding />
      <Development />
      <Footer />

      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Uppernodes
          </a>
        </footer>
      </div>
    </>
  );
}
