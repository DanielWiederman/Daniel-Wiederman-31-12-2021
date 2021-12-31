import { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { enterPostPage } from "./posts/postsActions";
import { Dispatch } from "redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import { PostPage } from "./posts/postPage";

interface MapDispatchInterface {
  enterPostPage?: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchInterface => {
  return {
    enterPostPage: () => dispatch(enterPostPage()),
  };
};

interface Props extends MapDispatchInterface {}

function App(props: Props) {
  useEffect(() => {
    const { enterPostPage } = props;
    if (enterPostPage) {
      enterPostPage();
    }
  });

  const route = (
    <Layout>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<PostPage />} />
      </Routes>
    </Layout>
  );

  return <div className="App">{route}</div>;
}

export default connect(null, mapDispatchToProps)(App);
