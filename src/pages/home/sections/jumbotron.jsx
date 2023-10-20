import React from "react";
import { Box, Text, Container, Grid, GridItem } from "@chakra-ui/react";

const Jumbotron = () => {
  return (
    <Container maxW="container.xl" py="167px" h="100vh">
      <Grid templateColumns={"repeat(2, 1fr)"}>
        <GridItem>
          <Box>
            <Text fontWeight={"500"}>Gecko Frens Metaverse</Text>
            <Text
              fontSize={"90px"}
              fontWeight={"900"}
              w="750px"
              m="0"
              fontFamily={"Azonix"}
            >
              Collect and Play{" "}
              <span
                style={{
                  background: "#cafc01",
                  color: "#040305",
                  padding: "10px",
                }}
              >
                {" "}
                Gecko
              </span>
            </Text>
            <Text
              fontFamily={"Neue Haas Grotesk Display Pro"}
              fontSize={"18px"}
              fontWeight={"400"}
              w="582.332px"
              mt="24px"
            >
              Team up for a positive adorable adventure and unique NFT
              collectibles Game for Gecko Lovers!
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Jumbotron;
