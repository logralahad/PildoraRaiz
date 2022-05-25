import React, { useContext, useState } from "react";

import {
  Box,
  Hide,
  VStack,
  Tabs,
  TabPanels,
  TabPanel,
  Show,
  Flex,
} from "@chakra-ui/react";

import UserMainTablero from "../../pages/Private/User/Menu/UserMainTablero";
import UserMainResponsive from "../../pages/Private/User/Menu/UserMainResponsive";
import { ListPacients } from "../../pages/Private/User/Pacientes/ListarPacientes";
import { ListConsultations } from "../../pages/Private/User/Consultas/ListarConsultas";
import { ListFiles } from "../../pages/Private/User/Expedientes/ListarExpediente";
import { Helmet } from "react-helmet";
import { AuthContext, IAuthContext } from "../../context/useAuth";

export function UserDash() {
  const [defIndex, setDefIndex] = useState(-1);
  const { currentUser } = useContext(AuthContext) as IAuthContext;

  return (
    <>
      <Helmet>
        <title>Tablero - {currentUser?.persona?.nombre}</title>
        <meta name="Dashboard User" content="User Dashboard" />
      </Helmet>
      <Tabs
        isFitted
        variant="enclosed"
        h={"100vh"}
        minW={"570px"}
        index={defIndex}
      >
        <Hide breakpoint="(max-width: 1060px)">
          <VStack spacing={0}>
            <UserMainTablero setIndex={setDefIndex} />

            <Box w={"100%"} pt={4} h={"100vh"}>
              <TabPanels>
                <TabPanel>
                  <ListPacients />
                </TabPanel>
                <TabPanel>
                  <ListConsultations />
                </TabPanel>
                <TabPanel>
                  <ListFiles />
                </TabPanel>
              </TabPanels>
            </Box>
          </VStack>
        </Hide>
        <Show breakpoint="(max-width: 1060px)">
          <VStack>
            <Flex w={"100%"} bg={"#CBF6DE"}>
              <UserMainResponsive setIndex={setDefIndex} />
            </Flex>
            <Box w={"100%"} pt={4} h={"100vh"}>
              <TabPanels>
                <TabPanel>
                  <ListPacients />
                </TabPanel>
                <TabPanel>
                  <ListConsultations />
                </TabPanel>
                <TabPanel>
                  <ListFiles />
                </TabPanel>
              </TabPanels>
            </Box>
          </VStack>
        </Show>
      </Tabs>
    </>
  );
}
