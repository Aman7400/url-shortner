import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Bottom from "./components/Bottom";
import NavigatorPage from "./components/NavigatorPage";
import Top from "./components/Top";
import Url from "./components/Url";
import { Container } from "./styles/app.styles";

export const ShortUrlContext = React.createContext("");

const App: React.FC = () => {
  const [shortUrl, setShotUrl] = useState("");
  return (
    <BrowserRouter>
      <Switch>
        {/* Generate Link */}
        <Route path="/" exact>
          <ShortUrlContext.Provider value={shortUrl}>
            <Container>
              {/* Top */}
              <Top />
              {/* Url  */}
              <Url setShortUrl={setShotUrl} />
              {/* Bottom */}
              <Bottom />
            </Container>
          </ShortUrlContext.Provider>
        </Route>
        {/* Navigate Link */}
        <Route path="/short-ly/:sUrl">
          <NavigatorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
