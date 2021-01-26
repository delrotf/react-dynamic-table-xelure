import React from "react";
import { render } from "react-dom";
import { WelcomePage } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.scss";

const App = () => {
  return <WelcomePage />;
};

render(<App />, document.getElementById("root"));
