import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <main className="App">
      <Box h={"100vh"}>
        <Outlet></Outlet>
      </Box>
    </main>
  );
};

export default Layout;
