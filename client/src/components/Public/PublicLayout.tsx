import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box, Center, VStack } from "@chakra-ui/react";

import { NavBar } from "./NavBar";
import { Footer } from "./Footer/Footer";
import { AuthContext, IAuthContext } from "../../context/useAuth";

export function PublicLayout() {
  const { currentUser } = useContext(AuthContext) as IAuthContext;
  require("../../styles/Public/Home.css");

  useEffect(() => {}, [currentUser]);

  return (
    <VStack>
      <Box w={"100%"}>
        <NavBar />
      </Box>
      <Center>
        <Outlet></Outlet>
      </Center>
      <Footer />
    </VStack>
  );
}
