import React from "react";
import { shallow } from "enzyme";
import { StyledTable, StyledHeadCell, StyledRow } from "baseui/table";

import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  const wrapper = shallow(
    <Dashboard
      inventoryList={[
        {
          id: 1,
          name: "test 01",
          sku: "0001",
          quantity: "22"
        }
      ]}
    />
  );

  describe("render", () => {
    it("should render the new product link", () => {
      expect(wrapper.find(".new-product__link")).toHaveLength(1);
    });

    it("should render the receive product link", () => {
      expect(wrapper.find(".receive-product__link")).toHaveLength(1);
    });

    it("should render the ship product link", () => {
      expect(wrapper.find(".ship-product__link")).toHaveLength(1);
    });

    it("should render a table", () => {
      expect(wrapper.find(StyledTable)).toHaveLength(1);
    });

    it("should render 3 regular columns", () => {
      expect(wrapper.find(StyledHeadCell)).toHaveLength(3);
    });

    it("should render 1 row", () => {
      expect(wrapper.find(StyledRow)).toHaveLength(1);
    });
  });
});
