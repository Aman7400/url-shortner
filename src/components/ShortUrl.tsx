import React, { useContext } from "react";
import { ShortUrlContext } from "../App";
import { Wrapper } from "../styles/short-url.styles";

interface Props {
  shortUrl: string;
}

const ShortUrl = () => {
  const sURl: string = useContext(ShortUrlContext);
  return <Wrapper className="center">Short Url is : {sURl}</Wrapper>;
};

export default ShortUrl;
