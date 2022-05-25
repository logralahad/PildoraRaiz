import React from "react";

import {
  Box,
  Image,
  SimpleGrid,
  Square,
  VStack,
  Center,
  Heading,
  Hide,
  Show,
} from "@chakra-ui/react";

import Hospital1 from "../../../images/hospital-1.jpg";
import Hospital2 from "../../../images/hospital-2.jpg";
import Hospital3 from "../../../images/hospital-3.png";
import Hospital4 from "../../../images/hospital-4.jpg";
import Hospital5 from "../../../images/hospital-5.jpg";
import Hospital6 from "../../../images/hospital-6.jpeg";
import { Helmet } from "react-helmet";

const Place = () => {
  return (
    <>
      <Helmet>
        <title>Instalaciones - Pildora Raiz</title>
        <meta name="Place" content="Página de instalaciones" />
      </Helmet>
      <Hide breakpoint="(max-width: 1400px)">
        <VStack h={"130vh"} gap={5}>
          <Box mb={10}>
            <Center>
              <Heading as={"h1"} size={"3xl"} color={"cyan.400"}>
                DONDE CUIDAMOS TU SALUD
              </Heading>
            </Center>
            <Center>
              <Heading as={"h3"} size={"lg"} color={"cyan.800"}>
                Instalaciones de primer mundo
              </Heading>
            </Center>
          </Box>
          <Box w={"90%"}>
            <SimpleGrid columns={3} gap={10}>
              <Square>
                <Image boxSize="100%" src={Hospital1}></Image>
              </Square>
              <Square>
                <Image boxSize="100%" src={Hospital2}></Image>
              </Square>
              <Square>
                <Image boxSize="100%" src={Hospital3}></Image>
              </Square>
            </SimpleGrid>
          </Box>
          <Box w={"90%"}>
            <SimpleGrid columns={3} gap={10}>
              <Square>
                <Image boxSize="100%" src={Hospital4}></Image>
              </Square>
              <Square>
                <Image boxSize="100%" src={Hospital5}></Image>
              </Square>
              <Square>
                <Image boxSize="100%" src={Hospital6}></Image>
              </Square>
            </SimpleGrid>
          </Box>
        </VStack>
      </Hide>
      <Show breakpoint="(max-width: 1400px)">
        <VStack h={"100vh"}>
          <Box mb={5}>
            <Center>
              <Heading as={"h1"} size={"lg"} color={"cyan.400"}>
                DONDE CUIDAMOS TU SALUD
              </Heading>
            </Center>
            <Center>
              <Heading as={"h3"} size={"md"} color={"cyan.800"}>
                Instalaciones de primer mundo
              </Heading>
            </Center>
          </Box>
          <Box w={"90%"}>
            <SimpleGrid columns={2} gap={10}>
              <Square>
                <Image boxSize="100%" src={Hospital1}></Image>
              </Square>
              <Square>
                <Image boxSize="100%" src={Hospital2}></Image>
              </Square>
            </SimpleGrid>
          </Box>
          <Box w={"90%"}>
            <SimpleGrid columns={2} gap={10}>
              <Square>
                <Image boxSize="100%" src={Hospital3}></Image>
              </Square>
              <Square>
                <Image boxSize="100%" src={Hospital4}></Image>
              </Square>
            </SimpleGrid>
          </Box>
          <Box w={"90%"}>
            <SimpleGrid columns={2} gap={10}>
              <Square>
                <Image boxSize="100%" src={Hospital5}></Image>
              </Square>
              <Square>
                <Image boxSize="100%" src={Hospital6}></Image>
              </Square>
            </SimpleGrid>
          </Box>
        </VStack>
      </Show>
    </>
  );
};

export default Place;
