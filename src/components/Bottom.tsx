import React from "react";
import { Info, Wrapper } from "../styles/bottom.styles";
import { FaReact } from "react-icons/fa";
import ShortUrl from "./ShortUrl";

const Bottom = () => {
  const year: number = new Date().getFullYear();
  return (
    <Wrapper>
      {/* Short Url */}
      <ShortUrl />
      {/* Info */}
      <Info>
        <h5 className="center">
          Made with{" "}
          <span>
            <FaReact />
          </span>
          by{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/strk1703"
          >
            Aman
          </a>
        </h5>
        <h6>Copyright &#169; {year}</h6>
      </Info>
    </Wrapper>
  );
};

export default Bottom;
