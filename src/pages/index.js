import React, { useEffect, useState } from "react";
import "../styles/home.scss";

const unsplashUrl =
  "https://images.unsplash.com/photo-1496055828681-8d699424c1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=936&q=80";

const useScrollPosition = () => {
  // Store the state
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);

  // On Scroll
  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  // Add and remove the window listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return scrollPos;
};
export default () => {
  const scrollPos = useScrollPosition();

  return (
    <div className="page-wrapper">
      <div className="text-parent">
        <h1
          className="full"
          style={{
            transform: `translate3d(-${scrollPos / 2}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
          The strength of the team is each individual member
        </h1>
        <h1
          className="full"
          style={{
            transform: `translate3d(${scrollPos / 2}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
          I really get motivated when I have doubters
        </h1>
      </div>
      <img
        src={unsplashUrl}
        style={{
          transform: `translate3d(-50%, calc(-${scrollPos *
            0.9}px - 50%), 0px)`,
        }}
      ></img>
      <div className="text-parent">
        <h1
          className="outline"
          style={{
            transform: `translate3d(-${scrollPos / 2}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
          The strength of the team is each individual member
        </h1>
        <h1
          className="outline"
          style={{
            transform: `translate3d(${scrollPos / 2}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
          I really get motivated when I have doubters
        </h1>
      </div>
    </div>
  );
};
