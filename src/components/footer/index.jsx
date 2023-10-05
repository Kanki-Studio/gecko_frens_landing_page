import React from "react";
import { Box, Text, Container, Image } from "@chakra-ui/react";
import { footer_nav, social_media } from "src/utils/enums";
import SocialMedia from "./socialMedia";
import Navigation from "./nav";
import star from "src/assets/Star.svg";

const Footer = () => {
  return (
    <Box w="100%">
      <Container maxW="container.xl">
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          py="75px"
        >
          <Box display="flex" gap="5px">
            <Image src={star} alt="star" />
            <Text fontWeight={"900"} fontSize={"32px"}>
              GECKO FRENS
            </Text>
          </Box>

          <Box display={"flex"} gap="50px">
            {footer_nav.map((footer, idx) => (
              <Navigation footer={footer} key={idx} />
            ))}
          </Box>
          <Box display="flex" gap="10px">
            {social_media.map((social, idx) => (
              <SocialMedia key={idx} item={social} />
            ))}
          </Box>
        </Box>
        <Box
          background={
            "linear-gradient(270deg, rgba(255, 255, 255, 0.10) 3.52%, #FFF 46.29%, rgba(255, 255, 255, 0.10) 95.79%)"
          }
          h="2px"
          w="100%"
        />
        <Box py="75px">
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
