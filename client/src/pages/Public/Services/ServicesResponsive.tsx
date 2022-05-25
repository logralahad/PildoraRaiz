import React from "react";

import {
  Box,
  Heading,
  Image,
  GridItem,
  Center,
  VStack,
  Grid,
  Square,
} from "@chakra-ui/react";

import Banner from "../../../images/banner_services.jpg";
import Ambulancia from "../../../images/ambulancia-icon.png";
import Full247 from "../../../images/247-icon.png";
import Vacuna from "../../../images/vacuna-icon.png";
import Laboratorio from "../../../images/lab-icon.png";
import Urgencias from "../../../images/urgencias-icon.png";
import Farmacia from "../../../images/farmacia-icon.png";

const ServicesResponsive = () => {
  return (
    <>
      <VStack spacing={"5%"} h={"100vh"} minW={"560px"}>
        <Center>
          <Box>
            <Image src={Banner} />
          </Box>
        </Center>
        <Box>
          <Center>
            <Heading as={"h1"} size={"xl"} color={"cyan.400"}>
              NUESTROS SERVICIOS
            </Heading>
          </Center>
          <Center>
            <Heading as={"h3"} size={"md"} color={"cyan.800"}>
              Tu salud es nuestra prioridad
            </Heading>
          </Center>
        </Box>
        <Center>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
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
      </VStack>
    </>
  );
};

export default ServicesResponsive;
