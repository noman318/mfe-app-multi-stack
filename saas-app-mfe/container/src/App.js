import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import MarketingApp from "./components/MarketingApp";
const App = () => {
  return (
    <div>
      <MarketingApp />
    </div>
  );
};

export default App;
