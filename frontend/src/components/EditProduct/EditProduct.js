import React, { Component } from "react";
import PropTypes from "prop-types";
import { styled } from "baseui";
import { Link } from "react-router-dom";
import { Spinner } from "baseui/spinner";
import { Paragraph2 } from "baseui/typography";

import { BASE_URL } from "../constants";
import ProductForm from "../ProductForm";

const Wrapper = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexFlow: "row wrap"
});

class EditProduct extends Component {
  state = { product: null };

  loadProduct = async () => {
    const { id } = this.props.match.params;
    try {
      const result = await fetch(`${BASE_URL}/api/products/${id}`);
      const resultJson = await result.json();
      this.setState({
        product: resultJson
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  componentDidMount() {
    this.loadProduct();
  }

  render() {
    const { product } = this.state;
    return (
      <Wrapper>
        <Paragraph2>
          <Link to="/">Back</Link>
        </Paragraph2>
        {!product && <Spinner size={50} title="Loading..." />}
        {product && <ProductForm product={product} />}
      </Wrapper>
    );
  }
}

export default EditProduct;
