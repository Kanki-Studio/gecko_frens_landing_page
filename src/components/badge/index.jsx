import React from "react";
import { Box } from "@chakra-ui/react";

const Badge = ({ type }) => {
  return (
    <Box display={"inline-block"}>
      <Box
        bg="#040305"
        color="#E3755B"
        borderRadius={"20px"}
        py="10px"
        px="10px"
        fontWeight={"600"}
        fontSize={"12px"}
        textTransform={"capitalize"}
      >
        {type}
      </Box>
    </Box>
  );
};

export default Badge;
