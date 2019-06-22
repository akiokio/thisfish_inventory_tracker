import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Spinner } from "baseui/spinner";

import Dashboard from "../Dashboard";

class Home extends Component {
  static propTypes = {
    inventoryList: PropTypes.array
  };

  render() {
    const { inventoryList } = this.props;
    return (
      <Fragment>
        {!inventoryList && <Spinner size={50} title="Loading..." />}
        {inventoryList && <Dashboard inventoryList={inventoryList} />}
      </Fragment>
    );
  }
}

export default Home;
