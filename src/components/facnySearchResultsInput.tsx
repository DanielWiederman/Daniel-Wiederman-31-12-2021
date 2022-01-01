import styled from "styled-components";
import { SearchQueryResponse } from "../utils/interfaces";
import { lg, md } from "../utils/medias";
import { FancyInput, FancyInputProps } from "./fancyInput";

interface FancySearchResultsInputProps extends FancyInputProps {
  options: SearchQueryResponse[];
  onCitySelect: (key: string, cityName: string) => void;
}

const FancySearchResultsInputContainer = styled.div`
  display: flex;
  align-items: center;
  background: papayawhip;
  width: 90vh;
  margin: auto;
  justify-content: center;
  position: relative;
  ${md} {
    display: flex;
    align-items: center;
    background: papayawhip;
    width: 310px;
    position: relative;
  }
`;

const ItemsContainer = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  background: papayawhip;
  z-index: 10;
  width: 90vh;
  overflow-y: auto;
  scrollbar-width: auto;
  scrollbar-color: #54a08d #ffffff;
  border-radius: 0px 0px 5px 10px;
  border-bottom: 2px solid black;
  box-sizing: border-box;
  max-height: 60vh;
  ${md} {
    position: absolute;
    top: 100%;
    display: flex;
    flex-direction: column;
    width: 310px;
    background: papayawhip;
    z-index: 10;
    max-height: 300px;
    overflow-y: auto;
    scrollbar-width: auto;
    scrollbar-color: #54a08d #ffffff;
    border-radius: 0px 0px 5px 10px;
    border-bottom: 2px solid black;
    box-sizing: border-box;
  }
  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #54a08d;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`;

const ItemRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 2vh 2vh;
  border-bottom: solid 0.2vh black;
  box-sizing: border-box;
  :hover {
    background-color: cyan;
    cursor: pointer;
  }
  .city-name {
    font-size: 5vh;
    width: 70%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .country-name {
    font-size: 3.5vh;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &:last-child {
    border-bottom: unset;
  }
  ${md} {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 10px 10px;
    border-bottom: solid 1px black;
    box-sizing: border-box;
    :hover {
      background-color: cyan;
      cursor: pointer;
    }
    .city-name {
      font-size: 20px;
      width: 70%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .country-name {
      font-size: 12px;
      text-align: right;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &:last-child {
      border-bottom: unset;
    }
  }
`;

export const FancySearchResultsInput = (
  props: FancySearchResultsInputProps
) => {
  const { value, onChange, loading, options, onCitySelect } = props;

  const items =
    !!options.length &&
    options.map((item, i) => {
      return (
        <ItemRow
          key={item.Key}
          onClick={() => onCitySelect(item.Key, item.LocalizedName)}
        >
          <div className="city-name">{item?.LocalizedName}</div>
          <div className="country-name">{item?.Country?.LocalizedName}</div>
        </ItemRow>
      );
    });

  return (
    <FancySearchResultsInputContainer>
      <FancyInput value={value} onChange={onChange} loading={loading} />
      <ItemsContainer>{items}</ItemsContainer>
    </FancySearchResultsInputContainer>
  );
};
