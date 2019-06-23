import React, { Component } from "react";
import faker from "faker";
import { styled } from "baseui";
import { Paragraph2 } from "baseui/typography";
import { Link, withRouter } from "react-router-dom";
import { Button } from "baseui/button";

import ProductForm from "../ProductForm";
import { BASE_URL } from "../constants";
import { getCookie } from "../../helpers/cookie";

const Container = styled("div", {
  width: "100%",
  height: "100%"
});

class NewProduct extends Component {
  // state = {
  //   name: "",
  //   sku: "",
  //   quantity: "",
  //   type: ""
  // };
  state = {
    name: faker.commerce.productName(),
    sku: faker.random.alphaNumeric(6),
    quantity: faker.random.number({ min: 0, max: 100 }),
    type: ["T1", "T2", "T3", "T4"][Math.floor(Math.random() * 4)]
  };

  onChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  handleSave = async () => {
    try {
      const result = await fetch(`${BASE_URL}/api/products/`, {
        method: "post",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken")
        }
      });
      const resultJson = await result.json();
      this.props.history.push(`/product/edit/${resultJson.id}/`);
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    return (
      <Container>
        <Paragraph2>
          <Link to="/">Back</Link>
        </Paragraph2>
        <ProductForm product={this.state} onChange={this.onChange} isCreating />
        <Button onClick={this.handleSave}>Save</Button>
      </Container>
    );
  }
}

export default withRouter(NewProduct);
