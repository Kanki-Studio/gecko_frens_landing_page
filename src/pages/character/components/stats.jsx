import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Stats = ({ title, stat }) => {
  const calculateWidth = (value) => (value / 100) * 150;

  const getBarColor = (value) => {
    if (value >= 70) {
      return "#4CAF50";
    } else if (value >= 40) {
      return "#FFC107";
    } else {
      return "#F44336";
    }
  };
  return (
    <Box>
      <Text
        textTransform={"capitalize"}
        mb="5px"
        fontWeight="500"
        fontSize="12px"
      >
        {title}
      </Text>

      <Box w="auto" h="10px" bg="#1A1D22" borderRadius={"20px"}>
        <Box
          h="10px"
          width={`${calculateWidth(stat)}px`}
          borderRadius={"20px"}
          bg={`${getBarColor(stat)}`}
        ></Box>
      </Box>

      <Box>
        <Text fontSize="12px" fontWeight={600} mt="5px" color="#aaa5b5">
          {stat}/100
        </Text>
      </Box>
    </Box>
  );
};

export default Stats;
