import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../components/header";

interface Props {
  children: ReactNode;
}

const LayoutContainer = styled.div`
  height: 100vh;
  position: relative;
`;

const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
