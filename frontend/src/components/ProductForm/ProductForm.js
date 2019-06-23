import React, { Component } from "react";
import PropTypes from "prop-types";
import { styled } from "baseui";
import { FormControl } from "baseui/form-control";
import { Input, SIZE } from "baseui/input";
import { StatefulSelect } from "baseui/select";

const Wrapper = styled("div", {
  width: "100%"
});

class ProductForm extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    isCreating: PropTypes.bool
  };

  static defaultProps = {
    isCreating: false
  };

  handleSelectChange = event => {
    this.props.onChange({
      target: {
        name: "type",
        value: event.option.id
      }
    });
  };

  render() {
    const { product, onChange, isCreating } = this.props;
    return (
      <Wrapper>
        {!isCreating && (
          <FormControl label="Product id">
            <Input
              name="id"
              size={SIZE.compact}
              value={product.id}
              disabled
              onChange={onChange}
            />
          </FormControl>
        )}
        <FormControl label="Product name">
          <Input
            name="name"
            size={SIZE.compact}
            value={product.name}
            onChange={onChange}
          />
        </FormControl>
        <FormControl label="Product sku">
          <Input
            name="sku"
            size={SIZE.compact}
            value={product.sku}
            onChange={onChange}
          />
        </FormControl>
        <FormControl label="Product quantity">
          <Input
            name="quantity"
            size={SIZE.compact}
            value={product.quantity}
            onChange={onChange}
          />
        </FormControl>
        <FormControl label="Product type">
          <StatefulSelect
            options={[
              { id: "T1", type: "Type 01" },
              { id: "T2", type: "Type 02" },
              { id: "T3", type: "Type 03" },
              { id: "T4", type: "Type 04" }
            ]}
            labelKey="id"
            valueKey="type"
            clearable={false}
            initialState={{ value: [{ id: product.type }] }}
            onChange={this.handleSelectChange}
          />
        </FormControl>
      </Wrapper>
    );
  }
}

export default ProductForm;
