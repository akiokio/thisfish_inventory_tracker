import React from "react";
import { shallow } from "enzyme";
import { Input } from "baseui/input";
import { StatefulSelect } from "baseui/select";

import ProductForm from "./ProductForm";

describe("ProductForm", () => {
  const mockOnChange = jest.fn();
  const wrapper = shallow(
    <ProductForm
      product={{
        id: 1,
        name: "test 01",
        sku: "0001",
        quantity: "22"
      }}
      onChange={mockOnChange}
    />
  );

  describe("render", () => {
    it("should render 4 inputs", () => {
      expect(wrapper.find(Input)).toHaveLength(4);
    });

    it("should render 1 select", () => {
      expect(wrapper.find(StatefulSelect)).toHaveLength(1);
    });
  });

  describe("events", () => {
    beforeEach(() => {
      mockOnChange.mockClear();
    });
    it("should call onChange when a input changes", () => {
      wrapper
        .find(Input)
        .first()
        .simulate("change", { target: { value: "7" } });
      expect(mockOnChange).toHaveBeenCalledWith({ target: { value: "7" } });
    });

    it("should call handleSelectChange when select changes", () => {
      const mockHandleSelectChange = jest.fn();
      wrapper.instance().handleSelectChange = mockHandleSelectChange;
      wrapper.find(StatefulSelect).simulate("change", { option: { id: "1" } });
      expect(mockOnChange).toHaveBeenCalledWith({
        target: { name: "type", value: "1" }
      });
    });
  });
});
