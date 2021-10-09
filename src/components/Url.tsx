import React, { FC, useState } from "react";
import { ShortenLinkButton, UrlInput, Wrapper } from "../styles/url.styles";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  animals,
  NumberDictionary,
  starWars,
} from "unique-names-generator";
import isURl from "validator/lib/isURL";
import axios from "axios";
interface UrlProps {
  setShortUrl(shortUrl: string): void;
}

// Custom Name Generation Config
const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });
const customConfig: Config = {
  dictionaries: [adjectives, animals, numberDictionary, starWars],
  separator: "-",
  length: 3,
};

const Url: FC<UrlProps> = ({ setShortUrl }) => {
  // Set Url
  const [url, setUrl] = useState("");
  // Set Url When Enter Key is Pressed
  function enterKeyPress(e: React.KeyboardEvent) {
    if (e.code === "Enter") {
      createShortUrl();
    }
  }
  // Create Short Link
  async function createShortUrl() {
    if (!isURl(url)) {
      setShortUrl(`Url is invalid`);
      return;
    }
    const sUrl = uniqueNamesGenerator(customConfig);
    try {
      // console.log("url", process.env.BACKEND_URL);
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/add`, {
        url,
        sUrl,
      });
      if (res.status === 200) {
        setShortUrl(`http://localhost:3000/short-ly/${sUrl}`);
        setUrl("");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log("Error", error);
    }
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
