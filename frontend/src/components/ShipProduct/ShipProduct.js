import React, { Component, Fragment } from "react";
import { styled } from "baseui";
import { Paragraph2 } from "baseui/typography";
import { Link, withRouter } from "react-router-dom";
import { Button } from "baseui/button";
import { Spinner } from "baseui/spinner";
import { StatefulSelect } from "baseui/select";
import { FormControl } from "baseui/form-control";
import { Input, SIZE } from "baseui/input";

import { getCookie } from "../../helpers/cookie";
import { BASE_URL } from "../constants";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  flexFlow: "row wrap",
  margin: "8px 0"
});

const InputContainer = styled("div", {
  width: "100%"
});

class ShipProduct extends Component {
  state = {
    productList: null,
    selectedProduct: null,
    quantity: 0,
    currentQuantity: 0
  };

  handleSave = async () => {
    const { quantity, selectedProduct, currentQuantity } = this.state;

    if (currentQuantity < quantity) {
      alert("You can't remove more than the quantity in stock");
      return;
    }
    try {
      const result = await fetch(
        `${BASE_URL}/api/products/${selectedProduct}/remove_from_inventory/`,
        {
          method: "post",
          body: JSON.stringify({
            quantity
          }),
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
          }
        }
      );
      const resultJson = await result.json();
      if (resultJson.status == "ok") {
        this.props.history.push(`/product/edit/${selectedProduct}/`);
      } else {
        alert("An error occured");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  loadProducts = async () => {
    try {
      const result = await fetch(`${BASE_URL}/api/products/`);
      const resultJson = await result.json();
      this.setState({
        productList: resultJson.results.map(i => ({
          id: i.id,
          value: `${i.name} - ${i.sku} - ${i.quantity}`,
          currentQuantity: i.quantity
        }))
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  handleSelectChange = e => {
    this.setState({
      selectedProduct: e.option.id,
      currentQuantity: e.option.currentQuantity
    });
  };

  handleInputchange = e => {
    this.setState({ quantity: e.target.value });
  };

  componentDidMount() {
    this.loadProducts();
  }

  render() {
    const { productList, quantity } = this.state;

    return (
      <Container>
        <Container>
          <Paragraph2>
            <Link to="/">Back</Link>
          </Paragraph2>
        </Container>
        <InputContainer>
          {!productList && <Spinner size={50} title="Loading..." />}
          {productList && (
            <Fragment>
              <FormControl label="Select product">
                <StatefulSelect
                  options={productList}
                  labelKey="value"
                  valueKey="value"
                  searchable={false}
                  clearable={false}
                  onChange={this.handleSelectChange}
                />
              </FormControl>
              <FormControl label="Quantity to ship">
                <Input
                  name="quantity"
                  type="number"
                  min="0"
                  size={SIZE.compact}
                  value={quantity}
                  onChange={this.handleInputchange}
                />
              </FormControl>
            </Fragment>
          )}
        </InputContainer>
        <Container>
          <Button onClick={this.handleSave}>Save</Button>
        </Container>
      </Container>
    );
  }
}

export default withRouter(ShipProduct);
