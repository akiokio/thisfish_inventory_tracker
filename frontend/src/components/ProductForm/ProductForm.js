import React, { Component } from "react";
import PropTypes from "prop-types";
import { styled } from "baseui";
import { FormControl } from "baseui/form-control";
import { Input, SIZE } from "baseui/input";

const Wrapper = styled("div", {
  width: "100%"
});

const Form = styled("div");

class ProductForm extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const { product } = this.props;
    return (
      <Wrapper>
        <FormControl label="Product id">
          <Input size={SIZE.compact} value={product.id} disabled />
        </FormControl>
        <FormControl label="Product name">
          <Input size={SIZE.compact} value={product.name} />
        </FormControl>
        <FormControl label="Product sku">
          <Input size={SIZE.compact} value={product.sku} />
        </FormControl>
        <FormControl label="Product quantity">
          <Input size={SIZE.compact} value={product.quantity} />
        </FormControl>
        <FormControl label="Product type">
          <Input size={SIZE.compact} value={product.type} />
        </FormControl>
      </Wrapper>
    );
  }
}

export default ProductForm;
