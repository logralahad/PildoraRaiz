import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Heading,
  Hide,
  VStack,
  HStack,
  Image,
  Spacer,
  TabList,
  Tab,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faUserCog,
  faAdd,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import Icon from "../../../../images/icon.png";

type Props = {
  setIndex: React.Dispatch<React.SetStateAction<any>>;
  setTitulo: React.Dispatch<React.SetStateAction<any>>;
  setSubtitulo: React.Dispatch<React.SetStateAction<any>>;
};

const AdminMainTab: React.FC<Props> = ({
  setIndex,
  setTitulo,
  setSubtitulo,
}) => {
  const opciones = [
    {
      text: "VER ROLES REGISTRADOS",
      icon: <FontAwesomeIcon icon={faList} size="2x" />,
      titulo: "ROLES REGISTRADOS",
    },
    {
      text: "AGREGAR NUEVO ROL",
      icon: <FontAwesomeIcon icon={faUserCog} size="2x" />,
      titulo: "CREAR NUEVO ROL",
    },
    {
      text: "VER USUARIOS REGISTRADOS",
      icon: <FontAwesomeIcon icon={faUsers} size="2x" />,
      titulo: "USUARIOS REGISTRADOS",
    },
    {
      text: "AGREGAR NUEVO USUARIO",
      icon: <FontAwesomeIcon icon={faAdd} size="2x" />,
      titulo: "CREAR NUEVO USUARIO",
    },
  ];

  return (
    <>
      <Box bg={"#34c9db"} h={"100vh"}>
        <VStack spacing={30} maxW={"750px"}>
          <HStack p={5} as={Link} to="/">
            <Box maxWidth={"80px"}>
              <Image src={Icon} />
            </Box>
            <Hide below="md">
              <VStack spacing={0} alignItems="left">
                <Heading as={"h4"} size={"lg"} color={"#fff"}>
                  P&Iacute;LDORA
                </Heading>
                <Heading as={"h4"} size={"lg"} color={"#fff"}>
                  RA&Iacute;Z
                </Heading>
              </VStack>
            </Hide>
          </HStack>
          <Spacer />
          <VStack spacing={"100%"}>
            <Box width={"100%"}>
              <TabList>
                <VStack width={"100%"}>
                  {opciones.map((tab, index) => (
                    <Tab
                      w={"100%"}
                      key={index}
                      color={"white"}
                      _selected={{
                        color: "black",
                        boxShadow: "none",
                        bg: "white",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                      }}
                      onClick={() => {
                        setIndex(index);
                        setTitulo(tab.titulo);
                      }}
                    >
                      {tab.icon}
                      <Box
                        as="button"
                        w={"50%"}
                        h={"60px"}
                        ml={"20%"}
                        bg="transparent"
                      >
                        <Heading as="h4" size="sm" textAlign={"right"}>
                          {tab.text}
                        </Heading>
                      </Box>
                    </Tab>
                  ))}
                </VStack>
              </TabList>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </>
  );
};

export default AdminMainTab;
