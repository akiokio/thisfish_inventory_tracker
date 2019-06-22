import React from "react";
import { withStyle } from "styletron-react";

import PropTypes from "prop-types";
import { styled } from "baseui";

import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell
} from "baseui/table";

import {
  Label1,
  Label2,
  Caption1,
  Caption2,
  Paragraph1,
  Paragraph2
} from "baseui/typography";

const Container = styled("div", {
  width: "100%",
  height: "100%"
});

const SmallerHeadCell = withStyle(StyledHeadCell, {
  maxWidth: "30px"
});

const SmallerCell = withStyle(StyledCell, {
  maxWidth: "30px"
});

const Dashboard = ({ inventoryList }) => {
  const COLUMNS = Object.keys(inventoryList[0]);
  const DATA = inventoryList.map(item => Object.values(item));
  return (
    <Container>
      <Paragraph2>Currently: {DATA.length} in stock</Paragraph2>
      <StyledTable>
        <StyledHead>
          <SmallerHeadCell>ID</SmallerHeadCell>
          {COLUMNS.slice(1).map((col, index) => (
            <StyledHeadCell key={index}>{col}</StyledHeadCell>
          ))}
        </StyledHead>

        <StyledBody>
          {DATA.map((row, index) => (
            <StyledRow key={index}>
              <SmallerCell>{row[0]}</SmallerCell>
              {row.slice(1).map((cell, cellIndex) => (
                <StyledCell key={cellIndex}>{cell}</StyledCell>
              ))}
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
