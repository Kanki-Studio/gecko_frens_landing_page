import React from "react";
import { Box, Text, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import explore from "src/assets/explore_btn.png";

const Jumbotron = () => {
  return (
    <Container maxW="container.xl" py="167px">
      <Grid templateColumns={"repeat(2, 1fr)"}>
        <GridItem>
          <Box>
            <Text fontSize={"96px"} fontWeight={"900"} w="783px" m="0">
              Find Your Game{" "}
              <span style={{ color: "#03B9BB" }}>Tournament</span> Here
            </Text>
            <Text
              fontFamily={"Red Rose"}
              fontSize={"18px"}
              fontWeight={"400"}
              mt="39px"
              w="582.332px"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>

            <Image
              src={explore}
              mt="48px"
              objectFit={"center"}
              cursor={"pointer"}
            />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Jumbotron;
