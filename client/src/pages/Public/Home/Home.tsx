import React from "react";

import {
  Box,
  Text,
  LinkOverlay,
  LinkBox,
  Heading,
  Image,
  GridItem,
  Stack,
  Tag,
  Center,
  Hide,
  Show,
  HStack,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";

import { LinkIcon } from "@chakra-ui/icons";
import Doctora from "../../../images/doctora.png";
import { HomeResponsive } from "./HomeResponsive";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Inicio - Pildora Raiz</title>
        <meta name="Home" content="Página de inicio" />
      </Helmet>
      <Hide breakpoint="(max-width: 1550px)">
        <HStack spacing={"5%"} w={"80%"}>
          <Center>
            <Box>
              <Image src={Doctora} />
            </Box>
          </Center>

          <Center>
            <Box textAlign="center">
              <Stack spacing={3}>
                <Heading as="h2" size="3xl">
                  Bienvenido a
                </Heading>
                <Heading as="h2" size="3xl">
                  Píldora Raíz
                </Heading>
                <Stack spacing={12}>
                  <Text fontSize="3xl">
                    Donde tu salud, es lo más importante
                  </Text>
                  <Text fontSize="xl" noOfLines={4} textAlign={"center"}>
                    La clínica 01 de Oaxaca ofrece a los ciudadanos oaxaqueños
                    una atención de alta calidad. Contamos con los mejores
                    especialistas y médicos, que cuidarán de tu salud de ti y de
                    tu familia.
                  </Text>
                </Stack>
                <GridItem>
                  <Tag size="lg" variant="outline" colorScheme="blue">
                    <LinkBox>
                      <LinkOverlay href="nosotros">
                        CONOCE MÁS <LinkIcon mx="2px" />
                      </LinkOverlay>
                    </LinkBox>
                  </Tag>
                </GridItem>
              </Stack>
            </Box>
          </Center>
        </HStack>
      </Hide>
      <Show breakpoint="(max-width: 1550px)">
        <HomeResponsive />
      </Show>
    </>
  );
}
