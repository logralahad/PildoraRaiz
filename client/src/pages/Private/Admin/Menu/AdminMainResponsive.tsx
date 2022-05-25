import React, { useContext, useState } from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  Box,
  Heading,
  Hide,
  HStack,
  Image,
  VStack,
  Tab,
  Center,
  Show,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faUserCog,
  faAdd,
  faUsers,
  faHome,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import IconAdmin from "../../../../images/admin.png";
import { AuthContext, IAuthContext } from "../../../../context/useAuth";

type Props = {
  setIndex: React.Dispatch<React.SetStateAction<any>>;
  setTitulo: React.Dispatch<React.SetStateAction<any>>;
  setSubtitulo: React.Dispatch<React.SetStateAction<any>>;
};

const AdminMainResponsive: React.FC<Props> = ({
  setIndex,
  setTitulo,
  setSubtitulo,
}) => {
  const { currentUser, signout } = useContext(AuthContext) as IAuthContext;

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
      <Box w={"100%"} bg={"#34c9db"}>
        <Navbar collapseOnSelect expand="xl" className="p-4">
          <Container fluid>
            <NavbarBrand>
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
            </NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              {opciones.map((tab, index) => (
                <Tab
                  w={"100%"}
                  key={index}
                  _selected={{
                    color: "#34c9db",
                    boxShadow: "none",
                    bg: "white",
                    borderRadius: "30px",
                  }}
                  onClick={() => {
                    setIndex(index);
                    setTitulo(tab.titulo);
                  }}
                >
                  {tab.icon}
                  <Box as="button" w={"80%"} h={"60px"} bg="transparent">
                    <Center>
                      <Heading as={"h4"} size="sm" textAlign={"right"}>
                        {tab.text}
                      </Heading>
                    </Center>
                  </Box>
                </Tab>
              ))}
              <Tab
                w={"100%"}
                as={Link}
                to="/"
                boxShadow="none"
                borderRadius="30px"
              >
                <FontAwesomeIcon icon={faHome} size="2x" />
                <Box as="button" w={"80%"} h={"60px"} bg="transparent">
                  <Center>
                    <Heading as={"h4"} size="sm" textAlign={"right"}>
                      REGRESAR AL INICIO
                    </Heading>
                  </Center>
                </Box>
              </Tab>
              <Show breakpoint="(max-width: 650px)">
                <Tab
                  w={"100%"}
                  as="button"
                  onClick={() => signout()}
                  boxShadow="none"
                  borderRadius="30px"
                >
                  <FontAwesomeIcon icon={faSignOut} size="2x" />
                  <Box as="button" w={"80%"} h={"60px"} bg="transparent">
                    <Center>
                      <Heading as={"h4"} size="sm" textAlign={"right"}>
                        CERRAR SESI&Oacute;N
                      </Heading>
                    </Center>
                  </Box>
                </Tab>
              </Show>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Box>
    </>
  );
};

export default AdminMainResponsive;
