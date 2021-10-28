import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./views/Header/Header";
import Carousel from "./views/Carousel/Carousel";
import Posts from "./views/Posts/Posts";
import Subcribe from "./views/Subcribe/Subcribe";
import Footer from "./views/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Posts />
      <Subcribe />
      <Footer />
    </>
  );
}

export default App;
