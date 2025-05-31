import { useEffect, useState, useRef } from "react";
import "./App.css"
import { TopNavMenu } from "./components/top-nav-menu";
import { Intro } from "./components/intro-section";
import { ShowHideComp1 } from "./components/fixedcomponents/show-hide1-component";
import { Chatbot } from "./components/chatbot";
import { Skills } from "./components/skills-section";
import { About } from "./components/about-section";
import { Testimonials } from "./components/testimonials-section";
import { Portfolio } from "./components/portfolio-section";
import { ContactForm } from "./components/contact-form";
import { TopBottomScroll } from "./components/fixedcomponents/topbottom-scroll-component";
import { Message } from "./components/fixedcomponents/todays-message-component";
import { Footer } from "./components/footer-section";

export const App = () => {

  const [isCompHidden, setIsCompHidden] = useState(true);
  const clickOrhover = "click"; //Or "hover"(in case of hover effect)
  const timeoutRef = useRef(null);
  const delay = "3000"; //value of this can be changed according to requirement

  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode');
        const jokeJson = await response.json();

        if (response.ok) {
          setJoke(jokeJson.joke);
        }
        if (!response.ok) {
          console.log(jokeJson.error);
          return () => clearTimeout(jokeChange);
        }
      } catch (error) {
        console.log("error: ", error.message);
      }
    }
    // fetch first joke after 5 seconds
    const initialTimeout = setTimeout(() => {
      fetchJoke();

      // then fetch a joke every 30 seconds
      const intervalId = setInterval(fetchJoke, 30000);

      // Saving intervalId in cleanup scope
      cleanup.intervalId = intervalId;
    }, 5000);

    const cleanup = {};

    // Cleanup both timeout and interval
    return () => {
      clearTimeout(initialTimeout);
      if (cleanup.intervalId) clearInterval(cleanup.intervalId);
    };

  }, [])


  // for security by disabling default drag-drop behavior, the attackers might try to drop malicious script files to hack into the logic
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    window.addEventListener("dragover", preventDefault);
    window.addEventListener("drop", preventDefault);

    return () => {
      window.removeEventListener("dragover", preventDefault);
      window.removeEventListener("drop", preventDefault);
    };
  }, []);


  return (
    <>
      <header className="flex flex-col items-center">
        <TopNavMenu />

        <Message
          headingReqd
          msgCntnrStyle=" !pt-21 !pb-1 bg-[var(--accentColor2)] text-[var(--lightBackground)] text-sm !p-0"
          heading={<>This website’s frontend is built entirely with React.js and enhanced with a touch of Anime.js.</>}
          headingStyle="flex flex-col gap-1"
          switchQuotationText
          quotationText={joke}
        />

      </header>

      <main>
        <Intro setIsCompHidden={setIsCompHidden} triggerEvent={clickOrhover} timeoutRef={timeoutRef} hidebackDelay={delay} />

        <TopBottomScroll topBtnStyle="!bg-[var(--accentColor2)]" bottomBtnStyle="!bg-[var(--accentColor2)]" />


        {!isCompHidden &&
          <ShowHideComp1 compStyle="absolute top-22 right-[1em] flex items-start gap-5" setIsCompHidden={setIsCompHidden} triggerEvent={clickOrhover} timeoutRef={timeoutRef} hidebackDelay={delay} closeBtnStyle="text-[var(--primaryColor)] !m-0  top-20 right-115" closeBtnReqd={true}><Chatbot /></ShowHideComp1>
        }


        <hr />
        <Skills />
        <hr />



        <Portfolio />
        <hr />



        <About />


        <hr />
        <Testimonials />

        <hr />

        <ContactForm />
      </main>

      <footer>
        <Footer />
      </footer>


    </>
  )
}