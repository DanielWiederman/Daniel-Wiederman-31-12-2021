import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer />
    </LayoutContainer>
  );
};

export default Layout;
