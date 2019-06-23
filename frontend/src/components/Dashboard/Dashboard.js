import React from "react";
import { withStyle } from "styletron-react";
import PropTypes from "prop-types";
import { styled } from "baseui";
import { Link } from "react-router-dom";

import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell
} from "baseui/table";
import { Button } from "baseui/button";

const Container = styled("div", {
  width: "100%",
  height: "100%"
});

const SmallerHeadCell = withStyle(StyledHeadCell, {
  maxWidth: "60px"
});

const SmallerCell = withStyle(StyledCell, {
  maxWidth: "60px"
});

const ActionContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  margin: "8px auto"
});

const Dashboard = ({ inventoryList }) => {
  const COLUMNS = Object.keys(inventoryList[0]);
  const DATA = inventoryList.map(item => Object.values(item));
  return (
    <Container>
      <ActionContainer>
        <Link to="/product/new">
          <Button>Create new product</Button>
        </Link>
        <Link to="/product/receive">
          <Button>Receive product</Button>
        </Link>
        <Link to="/product/ship">
          <Button>Ship product</Button>
        </Link>
      </ActionContainer>
      <StyledTable>
        <StyledHead>
          <SmallerHeadCell>ID</SmallerHeadCell>
          {COLUMNS.slice(1).map((col, index) => (
            <StyledHeadCell key={index}>{col}</StyledHeadCell>
          ))}
          <SmallerHeadCell>Actions</SmallerHeadCell>
        </StyledHead>

        <StyledBody>
          {DATA.map((row, index) => (
            <StyledRow key={index}>
              <SmallerCell>{row[0]}</SmallerCell>
              {row.slice(1).map((cell, cellIndex) => (
                <StyledCell key={cellIndex}>
                  <Link to={`/product/edit/${row[0]}`}>{cell}</Link>
                </StyledCell>
              ))}
              <SmallerCell>
                <Link to={`/product/edit/${row[0]}`}>Edit</Link>
              </SmallerCell>
            </StyledRow>
          ))}
        </StyledBody>
      </StyledTable>
    </Container>
  );
};

Dashboard.propTypes = {
  inventoryList: PropTypes.array.isRequired
};

export default Dashboard;
