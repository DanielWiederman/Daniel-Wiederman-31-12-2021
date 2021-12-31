import React from "react";
import styled from "styled-components";
import Spinner from "./fancySpinner";

const FancyInputContainer = styled.div`
  display: flex;
  align-items: center;
  background: papayawhip;
  width: 300px;
  flex: 0;
  border-radius: 8px;
  height: 35px;
  border: 1.5px solid transparent;
  :focus-within {
    border: 1.5px solid cyan;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 0px 10px;
  border: none;
  position: relative;
  outline: none;
  width: 275px;
  height: 95%;
  margin: auto;
  border-radius: 8px;
  background: papayawhip;
`;

const I = styled.i`
  width: 25px;
  margin: auto;
  height: 100%;
  font-size: 20px;
  height: 20px;
`;

interface FancyInputProps {
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
