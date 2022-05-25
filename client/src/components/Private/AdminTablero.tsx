import React, { useContext, useState } from "react";

import {
  Show,
  Hide,
  Flex,
  Tabs,
  VStack,
  Box,
  Center,
  Heading,
  TabPanel,
  TabPanels,
  HStack,
  Spacer,
  Image,
  Button,
} from "@chakra-ui/react";

import AdminMainResponsive from "../../pages/Private/Admin/Menu/AdminMainResponsive";
import AdminMainTab from "../../pages/Private/Admin/Menu/AdminMainTablero";
import { CreateRol } from "../../pages/Private/Admin/Roles/CrearRol";
import { ListRoles } from "../../pages/Private/Admin/Roles/ListarRoles";
import { ListUsers } from "../../pages/Private/Admin/Users/ListarUsers";
import { CreateUser } from "../../pages/Private/Admin/Users/CrearUser";

import IconAdmin from "../../images/admin.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import { AuthContext, IAuthContext } from "../../context/useAuth";

export function AdminTablero() {
  const [defIndex, setDefIndex] = useState(-1);
  const [titulo, setTitulo] = useState("BIENVENIDO DE VUELTA");
  const [subtitulo, setSubtitulo] = useState("");
  const { currentUser, signout } = useContext(AuthContext) as IAuthContext;
  const [flag, setFlag] = useState(false);

  return (
    <>
      <Helmet>
        <title>Tablero - Administrador</title>
        <meta name="Dashboard Admin" content="Admin Dashboard" />
      </Helmet>
      <Tabs variant="unstyled" h={"100vh"} index={defIndex}>
        <Hide breakpoint="(max-width: 1060px)">
          <Box>
            <Flex>
              <AdminMainTab
                setIndex={setDefIndex}
                setTitulo={setTitulo}
                setSubtitulo={setSubtitulo}
              />
              <Box flex="1" pt={3} h={"100vh"}>
                <VStack>
                  <Flex w={"100%"} pl={10} pr={10}>
                    <Center>
                      <Heading>{titulo}</Heading>
                      <Heading as="h2" size="lg">
                        {subtitulo}
                      </Heading>
                    </Center>
                    <Spacer />
                    <HStack>
                      <Box maxWidth={"85px"}>
                        <Image src={IconAdmin} />
                      </Box>
                      <Hide breakpoint="(max-width: 650px)">
                        <VStack spacing={0}>
                          <Heading as={"h1"} size={"xl"} color={"#000"}>
                            Administrador
                          </Heading>
                          <Heading
                            as={"button"}
                            onClick={() => signout()}
                            size={"sm"}
                            color={"#ff0000"}
                          >
                            Cerrar sesi&oacute;n
                          </Heading>
                        </VStack>
                      </Hide>
                    </HStack>
                  </Flex>
                  <TabPanels pl={10} pr={10}>
                    <TabPanel>
                      <ListRoles flag={flag} setFlag={setFlag} />
                    </TabPanel>
                    <TabPanel>
                      <CreateRol flag={flag} setFlag={setFlag} />
                    </TabPanel>
                    <TabPanel>
                      <ListUsers flag={flag} setFlag={setFlag} />
                    </TabPanel>
                    <TabPanel>
                      <CreateUser flag={flag} setFlag={setFlag} />
                    </TabPanel>
                  </TabPanels>
                </VStack>
              </Box>
            </Flex>
            <Box bg={"#34c9db"} pos={"absolute"} bottom={0}>
              <Button
                as={Link}
                to="/"
                w={"298px"}
                leftIcon={<FontAwesomeIcon icon={faHome} />}
                bg="transparent"
                color={"white"}
              >
                Regresar al Inicio
              </Button>
            </Box>
          </Box>
        </Hide>
        <Show breakpoint="(max-width: 1060px)">
          <VStack minW={"520px"}>
            <AdminMainResponsive
              setIndex={setDefIndex}
              setTitulo={setTitulo}
              setSubtitulo={setSubtitulo}
            />
            <Box w={"100%"} pt={4} h={"100vh"}>
              <VStack>
                <Center>
                  <Heading>{titulo}</Heading>
                  <Heading as="h2" size="lg">
                    {subtitulo}
                  </Heading>
                </Center>
                <TabPanels>
                  <TabPanel>
                    <ListRoles flag={flag} setFlag={setFlag} />
                  </TabPanel>
                  <TabPanel>
                    <CreateRol flag={flag} setFlag={setFlag} />
                  </TabPanel>
                  <TabPanel>
                    <ListUsers flag={flag} setFlag={setFlag} />
                  </TabPanel>
                  <TabPanel>
                    <CreateUser flag={flag} setFlag={setFlag} />
                  </TabPanel>
                </TabPanels>
              </VStack>
            </Box>
          </VStack>
        </Show>
      </Tabs>
    </>
  );
}
