import React from "react";

import {
  Box,
  Heading,
  Image,
  Center,
  Hide,
  Show,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

import { ContactMessage } from "./MessageForm";
import Main from "../../../images/contact-main.jpg";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Cont&aacute;ctanos - Pildora Raiz</title>
        <meta name="Contacto" content="Página de contacto" />
      </Helmet>
      <Hide breakpoint="(max-width: 950px)">
        <VStack w={"85%"} h={"100vh"}>
          <Box mb={10}>
            <Center>
              <Heading as={"h1"} size={"3xl"} color={"cyan.400"}>
                M&Aacute;NDANOS UN MENSAJE
              </Heading>
            </Center>
            <Center>
              <Heading as={"h3"} size={"lg"} color={"cyan.800"}>
                Nos interesa saber tu opini&oacute;n
              </Heading>
            </Center>
          </Box>
          <SimpleGrid columns={2} gap={"5%"}>
            <Center>
              <ContactMessage />
            </Center>
            <Center>
              <Box w={"80%"}>
                <Image src={Main} />
              </Box>
            </Center>{" "}
          </SimpleGrid>
        </VStack>{" "}
      </Hide>

      <Show breakpoint="(max-width: 950px)">
        <VStack w={"100%"} h={"100vh"} gap={6}>
          <Box>
            <Center>
              <Heading as={"h1"} size={"xl"} color={"cyan.400"}>
                M&Aacute;NDANOS UN MENSAJE
              </Heading>
            </Center>
            <Center>
              <Heading as={"h3"} size={"lg"} color={"cyan.800"}>
                Nos interesa saber tu opini&oacute;n
              </Heading>
            </Center>
          </Box>
          <ContactMessage />
        </VStack>
      </Show>
    </>
  );
};

export default Contact;
