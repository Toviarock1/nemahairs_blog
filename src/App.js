import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./hoc/Layout/Layout";
import Post from "./views/Post/Post";
import './App.css'

function App() {
  return (
    <>
      <Layout>
        <Post />
      </Layout>
    </>
  );
}

export default App;
