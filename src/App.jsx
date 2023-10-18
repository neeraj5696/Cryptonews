import { useState } from "react";
import reactLogo from "./assets/images/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App flex">
      <div className="">
        <a href="/">
          {" "}
          <img src="https://cimg.co/p/crypto-news-logo-full.svg" alt="logo" />
        </a>
      </div>
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="flex mx-2">
          <div className="bold">All</div>
          <div className="my-2.5 ml-1 bold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <g fill-rule="evenodd">
                <path d="M0 3.999L12 3.999 12 2.999 0 2.999zM0 7L12 7 12 6 0 6zM0 1L12 1 12 0 0 0z"></path>
              </g>
            </svg>
          </div>
        </div>
      </button>
      {isShown && (
        <div className="flex m-10">
          <div className="m-10">News</div>
          <div className="m-10">Exclusive</div>
          <div className="m-10">Videos</div>
          <div className="m-10">Guides</div>
          <div className="m-10">Exchange</div>
          <div className="m-10">Recommended</div>
        </div>
      )}
    </div>
  );
}

export default App;
