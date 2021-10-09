import { useParams } from "react-router";

import React from "react";
import axios from "axios";

interface RouteParams {
  sUrl: string;
}
type Data = {
  _id: any;
  url: string;
  sUrl: string;
};

const NavigatorPage = () => {
  const { sUrl } = useParams<RouteParams>();

  React.useEffect(() => {
    getNavigationUrl();
  }, []);

  const getNavigationUrl = async () => {
    try {
      const res = await axios.get<Data>(`http://localhost:5000/url/${sUrl}`);
      console.log("Data is", res.data.url);
      // setUrlData(res.data);
      console.log(`https://${res.data.url}`);
      window.location.replace(`https://${res.data.url}`);
    } catch (error) {
      console.log(error);
    }
  };

  return <div></div>;
};

export default NavigatorPage;
