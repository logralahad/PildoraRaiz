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
  VStack,
} from "@chakra-ui/react";

import { LinkIcon } from "@chakra-ui/icons";
import Doctor from "../../../images/doctor-corazon.jpg";

export function HomeResponsive() {
  return (
    <VStack spacing={"5%"} w={"80%"} h={"100vh"}>
      <Box textAlign="center">
        <Stack spacing={3}>
          <Heading as="h2" size="3xl">
            Bienvenido a
          </Heading>
          <Heading as="h2" size="3xl">
            Píldora Raíz
          </Heading>
          <Stack spacing={12}>
            <Text fontSize="3xl">Donde tu salud, es lo más importante</Text>
            <Text fontSize="xl" noOfLines={4} textAlign={"center"}>
              La clínica 01 de Oaxaca ofrece a los ciudadanos oaxaqueños una
              atención de alta calidad. Contamos con los mejores especialistas y
              médicos, que cuidarán de tu salud de ti y de tu familia.
            </Text>
          </Stack>
          <Stack spacing={6}>
            <GridItem>
              <Tag size="lg" variant="outline" colorScheme="blue">
                <LinkBox>
                  <LinkOverlay href="nosotros">
                    CONOCE MÁS <LinkIcon mx="2px" />
                  </LinkOverlay>
                </LinkBox>
              </Tag>
            </GridItem>
            <Center>
              <Box maxW={"550px"}>
                <Image src={Doctor} />
              </Box>
            </Center>
          </Stack>
        </Stack>
      </Box>
    </VStack>
  );
}
