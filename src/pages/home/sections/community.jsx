import React from "react";
import {
  Box,
  Container,
  Text,
  Image,
  Center,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import bowman from "src/assets/gecko_art.png";

const Community = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

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
        <Box className="grid" alignItems={"center"}>
          <Box>
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
          </Box>
          <Box>
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
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Community;
