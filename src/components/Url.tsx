import React, { FC, useState } from "react";
import {
  ErrorMessage,
  ShortenLinkButton,
  UrlInput,
  Wrapper,
  URLWrapper,
} from "../styles/url.styles";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
  NumberDictionary,
  starWars,
} from "unique-names-generator";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase.utils";
import isURl from "validator/lib/isURL";
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
  // Set Error
  const [error, setError] = useState(false);

  // Set Url When Enter Key is Pressed
  function enterKeyPress(e: React.KeyboardEvent) {
    if (e.code === "Enter") {
      createShortUrl();
    }
  }

  async function createShortUrl() {
    if (!isURl(url)) {
      setShortUrl(`Url is invalid`);
      // setError(true);
      return;
    }
    const sUrl = uniqueNamesGenerator(customConfig);
    try {
      const docRef = await addDoc(collection(db, "short-links"), {
        url,
        sUrl,
      });
      console.log("Url Added at:", docRef);
    } catch (error) {
      console.log("Error", error);
    }
    setShortUrl(`http://short-ly/${sUrl}`);
    setUrl("");
  }

  return (
    <Wrapper>
      {error && <ErrorMessage>URl is invalid</ErrorMessage>}

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
