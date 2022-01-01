import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { lg } from "../utils/medias";

const HeaderRow = styled.div`
  width: 100vh;
  text-align: center;
  font-size: 6vh;
  color: black;
  font-weight: 500;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  & .weather-app-title {
    padding: 2vh 0vh;
  }
  & .route-btns {
    padding: 2vh 0vh;
    border-top: 1px solid black;
    display: flex;
    justify-content: space-around;
  }

  ${lg} {
    width: 100%;
    text-align: center;
    font-size: 25px;
    color: black;
    font-weight: 500;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    flex-direction: row;
    box-sizing: border-box;
    & .weather-app-title {
      padding: unset;
    }
    & .route-btns {
      display: flex;
      justify-content: start;
      padding: unset;
      border-top: unset;
    }
  }
`;

const LinkBtn = styled.div`
  padding: 0px 5px;
  a {
    color: unset;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderRow>
      <div className="weather-app-title">Weather App</div>
      <div className="route-btns">
        <LinkBtn>
          <Link to="/">Main</Link>
        </LinkBtn>
        <LinkBtn>
          <Link to="/favorites">Favorites</Link>
        </LinkBtn>
      </div>
    </HeaderRow>
  );
};

export default Header;
