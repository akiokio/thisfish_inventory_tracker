import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Spinner } from "baseui/spinner";
import { styled } from "baseui";

import { BASE_URL } from "../constants";
import Dashboard from "../Dashboard";

const Wrapper = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexFlow: "row wrap"
});

class Home extends Component {
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
      <Wrapper>
        {!inventoryList && <Spinner size={50} title="Loading..." />}
        {inventoryList && <Dashboard inventoryList={inventoryList} />}
      </Wrapper>
    );
  }
}

export default Home;
