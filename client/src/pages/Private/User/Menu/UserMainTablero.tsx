import React, { useContext } from "react";

import {
  Box,
  Heading,
  Hide,
  HStack,
  Image,
  VStack,
  TabList,
  Tab,
  Flex,
  Spacer,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faUsers, faUser } from "@fortawesome/free-solid-svg-icons";

import Icon from "../../../../images/icon.png";
import IconUser from "../../../../images/user.png";
import { AuthContext, IAuthContext } from "../../../../context/useAuth";

type Props = {
  setIndex: React.Dispatch<React.SetStateAction<any>>;
};

const UserMainTablero: React.FC<Props> = ({ setIndex }) => {
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
      <Flex w={"100%"} bg={"#CBF6DE"} p={8}>
        <HStack w={"60%"}>
          <Box maxWidth={"50px"}>
            <Image src={Icon} />
          </Box>

          <LinkBox>
            <LinkOverlay href="/">
              <HStack spacing={0}>
                <Heading as={"h1"} size={"lg"} color={"#ff0000"}>
                  P&Iacute;LDORA
                </Heading>
                <Heading as={"h1"} size={"lg"} color={"#00b3ff"}>
                  RA&Iacute;Z
                </Heading>
              </HStack>
            </LinkOverlay>
          </LinkBox>
        </HStack>
        <Spacer />
        <Hide breakpoint="(max-width: 350px)">
          <HStack>
            <VStack spacing={0}>
              <Heading as={"h1"} size={"sm"} color={"#000"}>
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
            <Box maxWidth={"50px"}>
              <Image src={IconUser} />
            </Box>
          </HStack>
        </Hide>
      </Flex>
      <Box width={"100%"} bg={"#CBF6DE"}>
        <TabList>
          {opciones.map((tab, index) => (
            <Tab
              key={index}
              _selected={{
                boxShadow: "none",
                bg: "white",
              }}
              onClick={() => {
                setIndex(index);
              }}
            >
              <VStack>
                {tab.icon}
                <Heading as="h4" size="sm">
                  {tab.text}
                </Heading>
              </VStack>
            </Tab>
          ))}
        </TabList>
      </Box>
    </>
  );
};

export default UserMainTablero;
