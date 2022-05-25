import React, { useEffect, useState } from "react";

import {
  Box,
  VStack,
  Center,
  Heading,
  Hide,
  Show,
  Grid,
  Wrap,
  WrapItem,
  Avatar,
  GridItem,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import User from "../../../models/User";
import UserService from "../../../services/UserService";

export function Us() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.getAllUsers()
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [users]);

  return (
    <>
      <Helmet>
        <title>Nosotros - Pildora Raiz</title>
        <meta name="Us" content="Página de nosotros" />
      </Helmet>
      <Hide breakpoint="(max-width: 1400px)">
        <VStack gap={5}>
          <Box mb={10}>
            <Center>
              <Heading as={"h1"} size={"3xl"} color={"cyan.400"}>
                NUESTRO EQUIPO
              </Heading>
            </Center>
            <Center>
              <Heading as={"h3"} size={"lg"} color={"cyan.800"}>
                Los expertos que cuidan de ti y tu familia
              </Heading>
            </Center>
          </Box>
          <Box w={"100%"}>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(3, 1fr)"
              gap={5}
            >
              {users.length > 0 &&
                users.map((miembro) => {
                  return miembro.rol?.nombre === "Administrador" ? (
                    <></>
                  ) : (
                    <GridItem key={miembro.id} w="100%">
                      <Box
                        borderRadius={"15px"}
                        border={"1px"}
                        p={6}
                        bg={"aqua"}
                      >
                        <Center>
                          <Wrap>
                            <WrapItem>
                              <Avatar
                                size="2xl"
                                name="Dan Abrahmov"
                                src="https://cdn-icons-png.flaticon.com/512/4305/4305692.png"
                              />
                            </WrapItem>
                          </Wrap>
                        </Center>
                        <Center>
                          <Heading as="h2" size={"lg"}>
                            {`${miembro.persona?.nombre!} ${miembro.persona
                              ?.materno!}`}
                          </Heading>
                        </Center>
                        <Center>
                          <Heading as="h3" size={"md"}>
                            {miembro.rol?.nombre}
                          </Heading>
                        </Center>
                      </Box>
                    </GridItem>
                  );
                })}
            </Grid>
          </Box>
        </VStack>
      </Hide>
      <Show breakpoint="(max-width: 1400px)">
        <VStack h={"100vh"} minW={"760px"}>
          <Box mb={5}>
            <Center>
              <Heading as={"h1"} size={"lg"} color={"cyan.400"}>
                NUESTRO EQUIPO
              </Heading>
            </Center>
            <Center>
              <Heading as={"h3"} size={"md"} color={"cyan.800"}>
                Los expertos que cuidan de ti y tu familia
              </Heading>
            </Center>
          </Box>
          <Box w={"80vh"}>
            <Grid
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap={5}
            >
              {users.length > 0 &&
                users.map((miembro, index) => {
                  return miembro.rol?.nombre === "Administrador" ? (
                    <></>
                  ) : (
                    <GridItem
                      key={miembro.id}
                      colSpan={index === users.length - 1 ? 2 : 1}
                      bg={"#"}
                    >
                      <Box
                        borderRadius={"15px"}
                        border={"1px"}
                        p={6}
                        bg={"aqua"}
                      >
                        <Center>
                          <Wrap>
                            <WrapItem>
                              <Avatar
                                size="2xl"
                                name="Dan Abrahmov"
                                src="https://cdn-icons-png.flaticon.com/512/4305/4305692.png"
                              />
                            </WrapItem>
                          </Wrap>
                        </Center>
                        <Center>
                          <Heading as="h2" size={"lg"}>
                            {`${miembro.persona?.nombre!} ${miembro.persona
                              ?.materno!}`}
                          </Heading>
                        </Center>
                        <Center>
                          <Heading as="h3" size={"md"}>
                            {miembro.rol?.nombre}
                          </Heading>
                        </Center>
                      </Box>
                    </GridItem>
                  );
                })}
            </Grid>
          </Box>
        </VStack>
      </Show>
    </>
  );
}
