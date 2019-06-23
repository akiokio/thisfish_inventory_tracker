import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { H1, Paragraph2 } from "baseui/typography";

import Home from "./Home";
import EditProduct from "./EditProduct";
import NewProduct from "./NewProduct";

const engine = new Styletron();

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "row wrap",
  height: "100%"
});

const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const NoMatch = () => (
  <Container>
    <Paragraph2>
      Location not found <Link to="/">Back</Link>
    </Paragraph2>
  </Container>
);

const App = () => (
  <Router>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <H1>ThisFish - Inventory</H1>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/new" component={NewProduct} />
            <Route path="/product/edit/:id" component={EditProduct} />
            <Route component={NoMatch} />
          </Switch>
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  </Router>
);

const wrapper = document.getElementById("app");
ReactDOM.render(<App />, wrapper);
