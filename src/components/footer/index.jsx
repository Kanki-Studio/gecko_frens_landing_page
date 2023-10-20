import React from "react";
import { Box, Text, Container, Image } from "@chakra-ui/react";
import { footer_nav, social_media } from "src/utils/enums";
import SocialMedia from "./socialMedia";
import Navigation from "./nav";

const Footer = () => {
  return (
    <Box w="100%" bg="#1A1D22">
      <Container maxW="container.xl">
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          py="75px"
        >
          <Box>
            <Text
              fontWeight={"900"}
              fontSize={"32px"}
              fontFamily={"Azonix"}
              color="#cafc01"
            >
              GECKO FRENS
            </Text>

            <Text w="400px">
              Team up for an adorable adventure and Unique NFT Collectibles
              Game!
            </Text>

            <Box display="flex" gap="10px" mt="24px">
              {social_media.map((social, idx) => (
                <SocialMedia key={idx} item={social} />
              ))}
            </Box>
          </Box>

          <Box display={"flex"} gap="50px">
            {footer_nav.map((footer, idx) => (
              <Navigation footer={footer} key={idx} />
            ))}
          </Box>
        </Box>

        <Box py="24px">
          <Text
            fontFamily={"Red Rose"}
            textAlign="center"
            fontWeight={"400"}
            fontSize={"16px"}
          >
            © 2023 Game. All Right Reserved
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
