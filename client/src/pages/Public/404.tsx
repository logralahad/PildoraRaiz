import React from "react";

import Image404 from "../../images/404-nf.jpg";
import { VStack, Image, Heading, Hide, Link, Box } from "@chakra-ui/react";

const NotFound404 = () => {
  return (
    <>
      <VStack>
        <Hide below="lg">
          <Box>
            <Image src={Image404}></Image>
          </Box>
        </Hide>
        <Heading as={"h1"} size={"xl"}>
          Probablemente quieras{" "}
          <Link color="teal.500" href="/">
            regresar al inicio
          </Link>
        </Heading>
      </VStack>
    </>
  );
};

export default NotFound404;
