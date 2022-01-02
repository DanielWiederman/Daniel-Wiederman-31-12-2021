import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { md } from "../utils/medias";

const HeaderRow = styled.div`
  width: 100%;
  text-align: center;
  font-size: 6vw;
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
    border-top: 1px solid black;
    display: flex;
    justify-content: space-around;
  }

  ${md} {
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

interface LinkBtnProps {
  isSelected: boolean;
  selected: routes;
}

const LinkBtn = styled.div<LinkBtnProps>`
  width: 50%;
  padding: 2vh;
  a {
    color: unset;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  ${({ isSelected }) =>
    isSelected &&
    `
    background: #3f3f85;
    color: white;
     a {
    color: unset;
    text-decoration: none;
  }
  `}
  ${md} {
    width: unset;
    padding: 10px 5px;
    ${({ selected }) =>
      `
      border-radius: ${
        selected === "main" ? "15px 0px 0px 15px" : "0px 15px 15px 0px"
      };
  `}
  }
`;

type routes = "main" | "favorites";

const Header = () => {
  const [selectedRoute, setSelectedRoute] = useState<routes>("main");
  return (
    <HeaderRow>
      <div className="weather-app-title">Weather App</div>
      <div className="route-btns">
        <LinkBtn
          isSelected={selectedRoute === "main"}
          selected={selectedRoute}
          onClick={() => setSelectedRoute("main")}
        >
          <Link to="/">Main</Link>
        </LinkBtn>
        <LinkBtn
          isSelected={selectedRoute === "favorites"}
          selected={selectedRoute}
          onClick={() => setSelectedRoute("favorites")}
        >
          <Link to="/favorites">Favorites</Link>
        </LinkBtn>
      </div>
    </HeaderRow>
  );
};

export default Header;
