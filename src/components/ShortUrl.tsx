import React, { useContext, useState } from "react";
import { ShortUrlContext } from "../App";
import {
  Wrapper,
  ShortUrlText,
  CopyToClipWrapper,
  CopiedTextMessage,
} from "../styles/short-url.styles";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { AiFillCopy } from "react-icons/ai";

const ShortUrl = () => {
  let sURl: string = useContext(ShortUrlContext);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    setCopied(true);
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  return (
    <Wrapper
      style={{ visibility: sURl !== "" ? "visible" : "hidden" }}
      className="center"
    >
      {copied ? (
        <CopiedTextMessage>Copied to Clipboard</CopiedTextMessage>
      ) : (
        <ShortUrlText>{sURl}</ShortUrlText>
      )}
      {sURl === "Url is invalid" || copied ? (
        ""
      ) : (
        <CopyToClipWrapper title="Copy to Clipboard" className="center">
          <CopyToClipboard text={sURl} onCopy={handleCopy}>
            <AiFillCopy color="#ff0076" />
          </CopyToClipboard>
        </CopyToClipWrapper>
      )}
    </Wrapper>
  );
};

export default ShortUrl;
