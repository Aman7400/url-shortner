import React, { FC, useState } from "react";
import { ShortenLinkButton, UrlInput, Wrapper } from "../styles/url.styles";

interface UrlProps {
  setShortUrl(shortUrl: string): string;
}

const Url: FC<UrlProps> = ({ setShortUrl }) => {
  const [url, setUrl] = useState("");

  function enterKeyPress(e: React.KeyboardEvent) {
    console.log(e);
    if (e.code === "Enter") {
      createShortUrl();
    }
  }

  function createShortUrl() {
    setShortUrl(url);
    setUrl("");
  }

  return (
    <Wrapper>
      <UrlInput
        placeholder="Type your Url here ..."
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        onKeyPress={enterKeyPress}
      />

      <ShortenLinkButton onClick={createShortUrl}>
        Shorten Link
      </ShortenLinkButton>
    </Wrapper>
  );
};

export default Url;
