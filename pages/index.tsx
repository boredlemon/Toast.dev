import Header from "../components/Header/Header";
// import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import About from "../components/Home/AboutMe/AboutMe";
// import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIhaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked"; 
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  // const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      // remove Typing project EventListeners
      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }
    setTimeout(() => {
      setShowElement(true);
    }, 4500);

    // setTimeout(() => {
    //   setShowThisCantBeReached(false);
    // }, 5400);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10400);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("Portfolio Rendered...");
  const meta = {
    title: "Coffee - Programmer☕",
    description: `I do coding as my hobby! Click on my website to learn more ;)`,
    image: "/Coffee.png", 
    color: "#233554", 
    type: "website",
    discordColor: "#233554", // Custom color tag for Discord
    author: "Coffee",
    keywords: "software development, coding, web development",
    siteName: "Coffee.com",
    twitterUsername: "@Coffee4000", // Your Twitter username
    canonicalURL: "https:////github.com/Coffeebit",
    faviconURL: "/favicon.ico", // Replace with your favicon URL
    locale: "en_US", // Specify your website's locale
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="theme-color" content={meta.color} />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https:////github.com/Coffeebit`} />
        <link rel="canonical" href={`https:////github.com/Coffeebit`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Coffee" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Coffee4000" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {/* Custom meta tag for Discord color hint */}
      <meta property="discord:color" content={meta.discordColor} />

        {/* Additional meta tags */}
      <meta name="author" content={meta.author} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="application-name" content={meta.siteName} />
      <link rel="icon" href={meta.faviconURL} />
      <meta property="og:locale" content={meta.locale} />
        
      </Head>
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        {/* { context.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></> }
        { context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></> } */}
        <Header finishedLoading={context.sharedState} sectionsRef={homeRef} />  {/* add .finishedLoading to make it load the website slower for example context.sharedState.finishedLoading */}
        <MyName finishedLoading={context.sharedState} />
        <SocialMediaArround finishedLoading={context.sharedState} />
        {context.sharedState ? <About ref={aboutRef} /> : <></>}
        {context.sharedState ? <WhereIhaveWorked /> : <></>}
        {context.sharedState ? <SomethingIveBuilt /> : <></>}
        {context.sharedState ? <GetInTouch /> : <></>}
        {context.sharedState ? (
          <Footer githubUrl={"https:////github.com/Coffeebit"} hideSocialsInDesktop={true} />
          ) : (
          <></>
        )}
        {!isProd && <ScreenSizeDetector />}
      </div>
    </>
  );
}