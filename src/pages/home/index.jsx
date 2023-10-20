import React from "react";
import Layout from "src/layout";
import Jumbotron from "./sections/jumbotron";
import About from "./sections/about";
import Characters from "./sections/characters";
import Community from "./sections/community";

const Home = () => {
  return (
    <Layout>
      <Jumbotron />
      <About />
      <Characters />
      <Community />
    </Layout>
  );
};

export default Home;
