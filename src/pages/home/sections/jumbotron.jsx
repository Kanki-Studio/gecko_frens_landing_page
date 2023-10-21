import React from "react";
import {
  Box,
  Text,
  Container,
  Button,
  Image,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import bg from "src/assets/bg.jpg";
import { motion } from "framer-motion";

const Jumbotron = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

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
        objectFit={"cover"}
        top={0}
      />
      <Container maxW="container.xl" py="167px" h="100vh" position={"relative"}>
        <Box>
          <Box>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              <Text fontWeight={"500"} textAlign={"center"}>
                Gecko Frens Metaverse
              </Text>
              <Text
                fontSize={isLargerThan800 ? "90px" : "50px"}
                fontWeight={"900"}
                fontFamily={"Azonix"}
                textAlign={"center"}
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
                mt="24px"
                textAlign={"center"}
              >
                Team up for a positive adorable adventure and unique NFT
                collectibles Game for Gecko Lovers!
              </Text>

              <Center>
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
              </Center>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Jumbotron;
