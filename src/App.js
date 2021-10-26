import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./views/Header/Header";
import Carousel from "./views/Carousel/Carousel";
import Posts from "./views/Posts/Posts";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Posts />
    </>
  );
}

export default App;
