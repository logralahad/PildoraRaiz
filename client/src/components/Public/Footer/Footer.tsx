import React from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Text,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Hide,
  Show,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import Icon from "../../../images/pill-icon.png";
import { PhoneIcon } from "@chakra-ui/icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterResponsive } from "./FooterResponsive";

export function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <Hide breakpoint="(max-width: 750px)">
        <Grid
          templateColumns="repeat(2, 1fr)"
          backgroundColor="#47A4D4"
          position={"fixed"}
          bottom={0}
          w={"100%"}
          p={"1%"}
        >
          <GridItem w={"50%"}>
            <HStack as={Link} to="/">
              <Box maxW={"50px"}>
                <Image src={Icon} />
              </Box>

              <HStack spacing={0}>
                <Heading as={"h1"} size={"xl"}>
                  P&Iacute;LDORA
                </Heading>
                <Heading as={"h1"} size={"xl"}>
                  RA&Iacute;Z
                </Heading>
              </HStack>
            </HStack>
          </GridItem>

          <GridItem colStart={3} colEnd={9}>
            <HStack spacing="24px">
              <Text fontSize={"2xl"} color="white">
                +52 51 265 09
              </Text>
              <PhoneIcon boxSize={7}></PhoneIcon>
              <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
              <LinkBox>
                <LinkOverlay href="contacto">
                  <Button
                    color="#fff"
                    backgroundColor="#000"
                    borderRadius={"20px"}
                  >
                    CONTÁCTANOS
                  </Button>
                </LinkOverlay>
              </LinkBox>
            </HStack>
          </GridItem>
        </Grid>
      </Hide>
      <Show breakpoint="(max-width: 750px)">
        <FooterResponsive></FooterResponsive>
      </Show>
    </>
  );
}
