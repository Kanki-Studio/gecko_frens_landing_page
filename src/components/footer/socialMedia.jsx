import React from "react";
import { Box } from "@chakra-ui/react";

const SocialMedia = ({ item }) => {
  return (
    <Box
      w="40px"
      h="40px"
      border="1px solid #fff"
      display={"grid"}
      placeItems={"center"}
      borderRadius={"100%"}
      fontSize={"16px"}
      color={"#fff"}
      cursor={"pointer"}
    >
      {item.icon}
    </Box>
  );
};

export default SocialMedia;
