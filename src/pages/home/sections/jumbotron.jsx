import React from "react";
import { Box, Text, Container, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import bg from "src/assets/bg.jpg";

const Jumbotron = () => {
  return (
    <div>
      <Image
        src={bg}
        alt="background"
        position={"absolute"}
        w="100%"
        h="100vh"
        zIndex={"-1"}
        opacity={"0.3"}
        top={0}
      />
      <Container maxW="container.xl" py="167px" h="100vh" position={"relative"}>
        <Box className="grid">
          <Box>
            <Box>
              <Text fontWeight={"500"}>Gecko Frens Metaverse</Text>
              <Text className="jumbo-text">
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

              <Link to="/market">
                <Button
                  bg="#cafc01"
                  boxShadow={"inner"}
                  w="300px"
                  h="50px"
                  color={"#040305"}
                  mt="30px"
                  _hover={{
                    bg: "#cafc01",
                  }}
                >
                  Explore
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Jumbotron;
