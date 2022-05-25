import React, { useContext, useEffect, useState } from "react";
import Icon from "../../images/icon.png";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Show,
  Hide,
} from "@chakra-ui/react";
import { AuthContext, IAuthContext } from "../../context/useAuth";

export function NavBar() {
  require("../../styles/Public/NavBar.css");
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useContext(AuthContext) as IAuthContext;
  const [key, setKey] = useState("/");

  useEffect(() => {
    setKey(location.pathname.replace("/", ""));
  }, [key]);

  const changeKey = (value: string) => {
    setKey(value);
    navigate(value);
  };

  return (
    <Navbar collapseOnSelect expand="xl" className="p-4">
      <Container fluid>
        <NavbarBrand as={Link} to="/">
          <HStack>
            <Box maxWidth={"85px"}>
              <Image src={Icon} />
            </Box>
            <Hide below="sm">
              <HStack spacing={0}>
                <Heading as={"h1"} size={"xl"} color={"#ff0000"}>
                  P&Iacute;LDORA
                </Heading>
                <Heading as={"h1"} size={"xl"} color={"#00b3ff"}>
                  RA&Iacute;Z
                </Heading>
              </HStack>
            </Hide>
          </HStack>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav
            activeKey={key}
            onSelect={(selectedKey) => changeKey(selectedKey!)}
          >
            <Nav.Link eventKey="">Inicio</Nav.Link>
            <Nav.Link eventKey="nosotros">Nosotros</Nav.Link>
            <Nav.Link eventKey="servicios">Servicios</Nav.Link>
            <Nav.Link eventKey="contacto">Cont&aacute;ctanos</Nav.Link>
            <Nav.Link eventKey="instalaciones">Instalaciones</Nav.Link>

            {currentUser ? (
              <Button
                as={Link}
                to={
                  currentUser.rolId! === Number(process.env.REACT_APP_ADMIN_ROL)
                    ? "admin"
                    : "tablero"
                }
                colorScheme="twitter"
                borderRadius={"20px"}
              >
                <Nav.Link
                  as={Link}
                  to={
                    currentUser.rolId! ===
                    Number(process.env.REACT_APP_ADMIN_ROL)
                      ? "admin"
                      : "tablero"
                  }
                  style={{ color: "white" }}
                >
                  Tablero
                </Nav.Link>
              </Button>
            ) : (
              <Button
                as={Link}
                to="/login"
                colorScheme="twitter"
                borderRadius={"20px"}
              >
                <Nav.Link as={Link} to="/login" style={{ color: "white" }}>
                  Iniciar sesión
                </Nav.Link>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
