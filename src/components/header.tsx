import React from "react";
import styled from "styled-components";

const HeaderRow = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 25px;
  color: black;
  font-weight: 500;
  border-bottom: 1px solid black;
`;

const Header = () => {
  return <HeaderRow>Header</HeaderRow>;
};

export default Header;
