import React, { useContext } from "react";
import { ShortUrlContext } from "../App";
import { Wrapper, CopyToClip, ShortUrlText } from "../styles/short-url.styles";

import { AiFillCopy } from "react-icons/ai";

const ShortUrl = () => {
  const sURl: string = useContext(ShortUrlContext);
  return (
    <Wrapper
      style={{ visibility: sURl !== "" ? "visible" : "hidden" }}
      className="center"
    >
      <ShortUrlText>{sURl}</ShortUrlText>
      {sURl === "Url is invalid" ? (
        ""
      ) : (
        <CopyToClip title="Copy to Clipboard" className="center">
          <AiFillCopy color="#ff0076" />
        </CopyToClip>
      )}
    </Wrapper>
  );
};

export default ShortUrl;
