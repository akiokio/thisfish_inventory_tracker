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
import { Paragraph2 } from "baseui/typography";

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
        <Paragraph2>Currently: {DATA.length} in stock</Paragraph2>
        <Link to="/product/new">
          <Button>Create new product</Button>
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
                <StyledCell key={cellIndex}>{cell}</StyledCell>
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
