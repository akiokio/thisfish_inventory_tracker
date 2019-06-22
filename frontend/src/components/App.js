import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { BASE_URL } from "./constants";
import { H1 } from "baseui/typography";

import Home from "./Home";
import EditProduct from "./EditProduct";

const engine = new Styletron();

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "row wrap",
  height: "100%"
});

class App extends Component {
  state = {
    inventoryList: null
  };

  loadInventory = async () => {
    try {
      const result = await fetch(`${BASE_URL}/api/products/`);
      const resultJson = await result.json();
      this.setState({
        inventoryList: resultJson.results
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  componentDidMount() {
    this.loadInventory();
  }

  render() {
    const { inventoryList } = this.state;
    return (
      <Router>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <Centered>
              <H1>ThisFirst - Inventory</H1>
              <Route
                path="/"
                exact
                render={() => <Home inventoryList={inventoryList} />}
              />
              <Route path="/edit/:id" component={EditProduct} />
            </Centered>
          </BaseProvider>
        </StyletronProvider>
      </Router>
    );
  }
}

const wrapper = document.getElementById("app");
ReactDOM.render(<App />, wrapper);
