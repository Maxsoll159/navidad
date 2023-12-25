import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Snowfall from 'react-snowfall'
function App() {
  var currentTheme = "plain";
  document.body.style.background = "#856f60";
  function switchTheme() {
    togglePlay()
    if (currentTheme === "plain") {
      currentTheme = "winter";
      //document.body.style.background = '#856f60';
      document
        .getElementById("tree-wrapper")
        .classList.add("tree-wrapper-show");

      if (
        document
          .getElementById("merry-christmas")
          .classList.contains("merry-christmas-noshow")
      ) {
        document
          .getElementById("merry-christmas")
          .classList.remove("merry-christmas-noshow");
      }
      document
        .getElementById("merry-christmas")
        .classList.add("merry-christmas-show");

      if (document.getElementById("hat").classList.contains("hat-noshow")) {
        document.getElementById("hat").classList.remove("hat-noshow");
      }
      document.getElementById("hat").classList.add("hat-show");
    } else {
      currentTheme = "plain";
      //document.body.style.background = '#a0e6ec';
      if (
        document
          .getElementById("tree-wrapper")
          .classList.contains("tree-wrapper-show")
      ) {
        document
          .getElementById("tree-wrapper")
          .classList.remove("tree-wrapper-show");
      }
      document
        .getElementById("tree-wrapper")
        .classList.add("tree-wrapper-noshow");

      if (
        document
          .getElementById("merry-christmas")
          .classList.contains("merry-christmas-show")
      ) {
        document
          .getElementById("merry-christmas")
          .classList.remove("merry-christmas-show");
      }
      document
        .getElementById("merry-christmas")
        .classList.add("merry-christmas-noshow");

      if (document.getElementById("hat").classList.contains("hat-show")) {
        document.getElementById("hat").classList.remove("hat-show");
      }
      document.getElementById("hat").classList.add("hat-noshow");
    }
    switchBackground();
    
  }

  function switchBackground() {
    if (document.body.style.background == "rgb(160, 230, 236)") {
      document.body.style.background = "rgb(133, 111, 96)";
    } else {
      document.body.style.background = "rgb(160, 230, 236)";
    }
    
  }

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <article style={{width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Snowfall />
        <audio ref={audioRef} loop>
        <source src="/navidad.mp3" type="audio/mp3" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
        <div style={{position: "absolute", bottom: "35px", right: "35px"}} className="switch" onClick={switchTheme}>
          <div className="tree">
            <div className="star"></div>
            <div className="top-branch"></div>
            <div className="middle-branch"></div>
            <div className="bottom-branch"></div>
            <div className="trunk"></div>
          </div>

      </div>

      <div>
        <div className="penguin">
          <div className="hat" id="hat">
            <div className="hat-bottom"></div>
            <div className="hat-middle"></div>
            <div className="hat-point"></div>
            <div className="hat-ball"></div>
          </div>
          <div className="hair"></div>
          <div className="head"></div>
          <div className="body">
            <div className="body-main"></div>
            <div className="body-white">
              <div className="body-circle">
                <div className="eyes"></div>
                <div className="body-rectangle"></div>
              </div>
              <div
                className="body-circle"
                style={{ transform: "translateX(60px) translateY(-75px)" }}
              >
                <div className="eyes"></div>
                <div className="body-rectangle"></div>
              </div>
              <div className="beak">
                <div className="beak-top"></div>
              </div>
            </div>
            <div className="bottom"></div>
          </div>
          <div className="arm" id="left-arm"></div>
          <div className="arm" id="right-arm"></div>
          <div className="foot" id="left-foot"></div>
          <div className="foot" id="right-foot"></div>
          <div className="laptop">
            <div className="logo"></div>
          </div>
          <div className="shadow"></div>
        </div>
        <div className="merry-christmas" id="merry-christmas">
          <h1 id="Merry">Feliz </h1>
          <h1 id="Christmas">Navidad</h1>
        </div>

        <div className="tree-wrapper" id="tree-wrapper">
          <div className="tree">
            <div className="star"></div>
            <div className="top-branch"></div>
            <div className="middle-branch"></div>
            <div className="bottom-branch"></div>
            <div className="trunk"></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default App;
