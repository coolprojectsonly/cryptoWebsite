import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import "./MainSection.css";
import "../App.css";
function MainSection() {
  const [sentence, setSentence] = useState();
  const deleteRef = useRef(false);
  const spanElement = useRef();
  const wordindex = useRef(0);
  const item = useRef("");
  useEffect(() => {
    setTimeout(() => {
      function type() {
        let wordIndex = 0;

        const word = JSON.parse(spanElement.current.getAttribute("data-words"));
        const currents = wordindex.current % word.length;
        const fullWord = word[currents];

        if (deleteRef.current === true) {
          item.current = fullWord.substring(0, item.current.length - 1);
        } else {
          item.current = fullWord.substring(0, item.current.length + 1);
        }

        let typeSpeed = 300;

        if (deleteRef.current === true) {
          typeSpeed /= 2;
        }

        if (!deleteRef.current === true && item.current === fullWord) {
          typeSpeed = 3000;

          deleteRef.current = true;
        }
        if (deleteRef.current === true && item.current === "") {
          deleteRef.current = false;
          wordindex.current = wordindex.current + 1;
          typeSpeed = 500;
        }

        setSentence(item.current);

        setTimeout(() => type(), typeSpeed);
      }
      type();
    }, 0);
  }, []);
  return (
    <div className="hero-container">
      <video src="/videos/crypto.mp4" autoPlay muted loop></video>
      <h1>
        Best Crypto
        <span
          ref={spanElement}
          data-txt
          className="txt-type"
          data-wait="3000"
          data-words='[" Business", "Coin", "Venture"]'
        >
          {" " + sentence}
        </span>
      </h1>
      <p>What are you waiting for?</p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          INVEST NOW <i className="fa fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
