import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./views/Header/Header";
import Carousel from "./views/Carousel/Carousel";
import Posts from "./views/Posts/Posts";
import Subcribe from "./views/Subcribe/Subcribe";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Posts />
      <Subcribe />
    </>
  );
}

export default App;
