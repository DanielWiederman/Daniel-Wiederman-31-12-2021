import styled from "styled-components";

const I = styled.i`
  width: 25px;
  font-size: 20px;
  height: 20px;
`;
interface Props {
  iconName: string;
}

export const FancyIcon = (props: Props) => (
  <I className={`fas fa-${props.iconName}`}></I>
);
