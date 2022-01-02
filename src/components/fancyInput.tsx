import React from "react";
import styled from "styled-components";
import { md } from "../utils/medias";
import Spinner from "./fancySpinner";

const FancyInputContainer = styled.div`
  display: flex;
  align-items: center;
  background: papayawhip;
  width: 90vw;
  flex: 0;
  border-radius: 1.04vw;
  height: 10vh;
  box-sizing: border-box;
  ${md} {
    display: flex;
    align-items: center;
    background: papayawhip;
    width: 300px;
    flex: 0;
    border-radius: 8px;
    height: 35px;
    box-sizing: border-box;
  }
`;

const Input = styled.input`
  padding: 0px 1.1vw;
  border: none;
  position: relative;
  outline: none;
  width: 60vw;
  height: 95%;
  margin: auto;
  border-radius: 1.04vw;
  font-size: 7.5vw;
  background: papayawhip;
  box-sizing: border-box;
  ${md} {
    padding: 0px 10px;
    border: none;
    position: relative;
    outline: none;
    width: 275px;
    height: 95%;
    margin: auto;
    border-radius: 8px;
    font-size: 20px;
    background: papayawhip;
    box-sizing: border-box;
  }
`;

const I = styled.i`
  width: 5vw;
  margin: auto;
  height: 100%;
  font-size: 3.8vh;
  height: 3.8vh;
  ${md} {
    width: 25px;
    margin: auto;
    height: 100%;
    font-size: 20px;
    height: 20px;
  }
`;

export interface FancyInputProps {
  value: string;
  onChange: (value: string) => void;
  loading: boolean;
}

export const FancyInput = (props: FancyInputProps) => {
  const { value, onChange, loading } = props;

  const handleChange = (e: any) => {
    onChange(e.target.value);
    e.preventDefault();
  };

  return (
    <div>
      <FancyInputContainer>
        <Input value={value} onChange={handleChange} />
        {loading ? <Spinner /> : <I className="fas fa-search"></I>}
      </FancyInputContainer>
    </div>
  );
};
