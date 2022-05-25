import React from "react";
import {
  Box,
  Heading,
  Image,
  GridItem,
  Center,
  Hide,
  Show,
  HStack,
  VStack,
  Grid,
  Square,
} from "@chakra-ui/react";
import Main from "../../../images/service-main.jpg";
import Main2 from "../../../images/service-main-2.jpg";
import ServicesResponsive from "./ServicesResponsive";

import Ambulancia from "../../../images/ambulancia-icon.png";
import Full247 from "../../../images/247-icon.png";
import Vacuna from "../../../images/vacuna-icon.png";
import Laboratorio from "../../../images/lab-icon.png";
import Urgencias from "../../../images/urgencias-icon.png";
import Farmacia from "../../../images/farmacia-icon.png";
import { Helmet } from "react-helmet";

export function Services() {
  return (
    <>
      <Helmet>
        <title>Servicios - Pildora Raiz</title>
        <meta name="Servicios" content="Página de servicios" />
      </Helmet>
      <Hide breakpoint="(max-width: 950px)">
        <VStack h={"85vh"} w={"100%"}>
          <Box mb={10}>
            <Center>
              <Heading as={"h1"} size={"3xl"} color={"cyan.400"}>
                NUESTROS SERVICIOS
              </Heading>
            </Center>
            <Center>
              <Heading as={"h3"} size={"lg"} color={"cyan.800"}>
                Tu salud es nuestra prioridad
              </Heading>
            </Center>
          </Box>
          <HStack spacing={50}>
            <Center>
              <Box boxSize={"50vh"}>
                <Image src={Main} />
              </Box>
            </Center>

            <Center>
              <Grid
                w={"50vh"}
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={4}
              >
                <GridItem>
                  <Center>
                    <Square bg="yellow.300" size={"150px"}>
                      <VStack>
                        <Image
                          borderRadius="full"
                          boxSize="90px"
                          src={Ambulancia}
                          fallbackSrc="https://via.placeholder.com/90"
                        />
                        <Heading as="h3" size={"md"}>
                          Ambulancia
                        </Heading>
                      </VStack>
                    </Square>
                  </Center>
                </GridItem>
                <GridItem>
                  <Center>
                    <Square bg="red.300" size={"150px"}>
                      <VStack>
                        <Image
                          borderRadius="full"
                          boxSize="90px"
                          src={Full247}
                          fallbackSrc="https://via.placeholder.com/90"
                        />
                        <Heading as="h3" size={"md"}>
                          Servicio
                        </Heading>
                      </VStack>
                    </Square>
                  </Center>
                </GridItem>
                <GridItem>
                  <Center>
                    <Square bg="red.300" size={"150px"}>
                      <VStack>
                        <Image
                          borderRadius="full"
                          boxSize="90px"
                          src={Vacuna}
                          fallbackSrc="https://via.placeholder.com/90"
                        />
                        <Heading as="h3" size={"md"}>
                          Vacunaci&oacute;n
                        </Heading>
                      </VStack>
                    </Square>
                  </Center>
                </GridItem>
                <GridItem>
                  <Center>
                    <Square bg="yellow.300" size={"150px"}>
                      <VStack>
                        <Image
                          borderRadius="full"
                          boxSize="90px"
                          src={Laboratorio}
                          fallbackSrc="https://via.placeholder.com/90"
                        />
                        <Heading as="h3" size={"md"}>
                          Laboratorio
                        </Heading>
                      </VStack>
                    </Square>
                  </Center>
                </GridItem>
                <GridItem>
                  <Center>
                    <Square bg="yellow.300" size={"150px"}>
                      <VStack>
                        <Image
                          borderRadius="full"
                          boxSize="90px"
                          src={Urgencias}
                          fallbackSrc="https://via.placeholder.com/90"
                        />
                        <Heading as="h3" size={"md"}>
                          Urgencias
                        </Heading>
                      </VStack>
                    </Square>
                  </Center>
                </GridItem>
                <GridItem>
                  <Center>
                    <Square bg="red.300" size={"150px"}>
                      <VStack>
                        <Image
                          borderRadius="full"
                          boxSize="90px"
                          src={Farmacia}
                          fallbackSrc="https://via.placeholder.com/90"
                        />
                        <Heading as="h3" size={"md"}>
                          Farmacia
                        </Heading>
                      </VStack>
                    </Square>
                  </Center>
                </GridItem>
              </Grid>
            </Center>
            <Hide breakpoint="(max-width: 1310px)">
              <Center>
                <Box boxSize={"50vh"}>
                  <Image src={Main2} />
                </Box>
              </Center>
            </Hide>
          </HStack>
        </VStack>
      </Hide>
      <Show breakpoint="(max-width: 950px)">
        <Box>
          <ServicesResponsive />
        </Box>
      </Show>
    </>
  );
}
