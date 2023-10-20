import React from "react";
import { Box } from "@chakra-ui/react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";

const Layout = ({ children }) => {
  return (
    <Box display={"flex"} flexDir={"column"} minH="100vh">
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
