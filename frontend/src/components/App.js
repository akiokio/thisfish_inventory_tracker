import React from "react";
import ReactDOM from "react-dom";

import Dashboard from "./Dashboard";

const App = () => (
  <div><Dashboard /></div>
);

const wrapper = document.getElementById("app");
ReactDOM.render(<App />, wrapper);