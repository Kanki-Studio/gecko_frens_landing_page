import React from "react";
import { Box } from "@chakra-ui/react";

const Filters = ({ active, children, handleActive }) => {
  return (
    <Box
      textTransform={"capitalize"}
      fontSize={"16px"}
      cursor={"pointer"}
      onClick={handleActive}
      borderRadius={"10px"}
      px="5px"
      py="5px"
      bg={active === children ? "#cafc01" : "#1A1D22"}
      fontWeight={500}
      color={active === children ? "#040305" : "#fff"}
    >
      {children}
    </Box>
  );
};

export default Filters;
