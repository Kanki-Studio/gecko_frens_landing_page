import React from "react";
import { Box } from "@chakra-ui/react";
import Footer from "src/components/footer";

const Layout = ({ children }) => {
  return (
    <Box display={"flex"} flexDir={"column"} minH="100vh">
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
