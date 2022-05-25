import React from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
  Grid,
  GridItem,
  HStack,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import { HamburgerIcon, PhoneIcon, InfoIcon } from "@chakra-ui/icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FooterResponsive() {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      backgroundColor="#47A4D4"
      position={"fixed"}
      bottom={0}
      w={"100%"}
      p={"1%"}
      mt={"-55px"}
    >
      <GridItem w={"50%"}>
        <HStack spacing={0}>
          <Heading as={"h1"} size={"xl"}>
            P&Iacute;LDORA
          </Heading>
          <Heading as={"h1"} size={"xl"}>
            RA&Iacute;Z
          </Heading>
        </HStack>
      </GridItem>

      <GridItem colStart={3} colEnd={9}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            colorScheme={"black"}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<PhoneIcon />}>+52 51 265 09</MenuItem>
            <LinkBox>
              <LinkOverlay href="contacto">
                <MenuItem icon={<InfoIcon />}>Contacto</MenuItem>
              </LinkOverlay>
            </LinkBox>
            <MenuDivider />
            <a href="https://www.facebook.com/Meta/">
              <MenuItem icon={<FontAwesomeIcon icon={faFacebook} />}>
                Facebook
              </MenuItem>
            </a>
            <a href="https://twitter.com/?lang=es">
              <MenuItem icon={<FontAwesomeIcon icon={faTwitter} />}>
                Twitter
              </MenuItem>
            </a>
          </MenuList>
        </Menu>
      </GridItem>
    </Grid>
  );
}
