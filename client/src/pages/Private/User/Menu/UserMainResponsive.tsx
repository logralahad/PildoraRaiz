import React, { useContext } from "react";
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
  faUser,
  faUsers,
  faHome,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import IconUser from "../../../../images/user.png";
import { AuthContext, IAuthContext } from "../../../../context/useAuth";

type Props = {
  setIndex: React.Dispatch<React.SetStateAction<any>>;
};

const UserMainResponsive: React.FC<Props> = ({ setIndex }) => {
  const { currentUser, signout } = useContext(AuthContext) as IAuthContext;
  const opciones = [
    {
      text: "Pacientes",
      icon: <FontAwesomeIcon icon={faUser} size="sm" />,
    },
    {
      text: "Consultas",
      icon: <FontAwesomeIcon icon={faList} size="sm" />,
    },
    {
      text: "Expedientes",
      icon: <FontAwesomeIcon icon={faUsers} size="sm" />,
    },
  ];

  return (
    <>
      <Box w={"100%"}>
        <Navbar collapseOnSelect expand="xl" className="p-4">
          <Container fluid>
            <NavbarBrand>
              <HStack>
                <Box maxWidth={"85px"}>
                  <Image src={IconUser} />
                </Box>
                <Hide breakpoint="(max-width: 650px)">
                  <VStack spacing={0}>
                    <Heading as={"h1"} size={"md"} color={"#000"}>
                      {currentUser?.persona?.nombre}
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
                <FontAwesomeIcon icon={faHome} size="sm" />
                <Box as="button" w={"80%"} h={"60px"} bg="transparent">
                  <Center>
                    <Heading as={"h4"} size="sm" textAlign={"right"}>
                      Regresar al inicio
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
                  <FontAwesomeIcon icon={faSignOut} size="sm" />
                  <Box as="button" w={"80%"} h={"60px"} bg="transparent">
                    <Center>
                      <Heading as={"h4"} size="sm" textAlign={"right"}>
                        Cerrar sesi&oacute;n
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

export default UserMainResponsive;
