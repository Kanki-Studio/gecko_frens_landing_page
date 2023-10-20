import React from "react";
import {
  Box,
  Container,
  Text,
  Image,
  Grid,
  GridItem,
  Center,
  Button,
} from "@chakra-ui/react";
import bowman from "src/assets/character.png";

const Community = () => {
  return (
    <Container maxW="container.xl" h="80vh">
      <Text
        position={"absolute"}
        fontSize={"150px"}
        fontFamily={"Azonix"}
        opacity={"0.1"}
        zIndex={"-1"}
      >
        Gecko frens
      </Text>
      <Box>
        <Grid templateColumns={"repeat(2,1fr)"} alignItems={"center"}>
          <GridItem>
            <Center>
              <Image
                src={bowman}
                alt="bowman"
                h="400px"
                transition={"transform 0.3s ease"}
                _hover={{ transform: "scale(1.1)" }}
                cursor={"pointer"}
              />
            </Center>
          </GridItem>
          <GridItem>
            <Text fontFamily={"Azonix"} fontSize={"30px"}>
              Join Our Community
            </Text>
            <Text>
              {" "}
              Be part of our amazing community and stay tuned for the news
            </Text>

            <Button
              bg="#cafc01"
              boxShadow={"inner"}
              w="auto"
              color={"#040305"}
              mt="24px"
              _hover={{
                bg: "#cafc01",
              }}
            >
              Join Us
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default Community;
