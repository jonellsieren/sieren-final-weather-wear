import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WeatherForm from "./weather-form";
import AboutPage from "../pages/about";
import Header from "./header";
import Footer from "./footer";
import WeatherResult from "./weather-result";

function App() {
  const [temperature, setTemperature] = useState(-10);
  const [precipitation, setPrecipitation] = useState(1);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <WeatherForm
            temperature={temperature}
            setTemperature={setTemperature}
            precipitation={precipitation}
            setPrecipitation={setPrecipitation}
          />
        </Route>
        <Route path="/result">
          <WeatherResult temperature={temperature} />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
