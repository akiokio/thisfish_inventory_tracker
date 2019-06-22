import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";

import { Spinner } from "baseui/spinner";
import {
  Label1,
  Label2,
  Caption1,
  Caption2,
  Paragraph1,
  Paragraph2
} from "baseui/typography";

import Dashboard from "./Dashboard";

import { BASE_URL } from "./constants";

const engine = new Styletron();

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Centered>
            {!inventoryList && <Spinner size={50} title="Loading..." />}
            {inventoryList && <Dashboard inventoryList={inventoryList} />}
          </Centered>
        </BaseProvider>
      </StyletronProvider>
    );
  }
}

const wrapper = document.getElementById("app");
ReactDOM.render(<App />, wrapper);
