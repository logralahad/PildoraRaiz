import React, { useEffect, useState } from "react";
import {
  Switch,
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Hide,
  Show,
} from "@chakra-ui/react";
import PacientsWithFile from "./TablaConExpediente";
import PacientsWithoutFile from "./TablaSinExpediente";

type props = {
  flag: boolean;
  setFlag: Function;
};

export function ListFiles({ flag, setFlag }: props) {
  const [hasFile, setHasFile] = useState(false);

  const onSwitchChange = (value: boolean) => {
    setHasFile(value);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Flex p={5}>
        <Box w={"40%"}>
          <HStack>
            <Heading mr={3}>EXPEDIENTES</Heading>
          </HStack>
        </Box>
        <Spacer />
        <Box w={"40%"}>
          <HStack>
            <Heading as="h4" size="sm" mr={3}>
              {hasFile
                ? "PACIENTES CON EXPEDIENTE"
                : "PACIENTES SIN EXPEDIENTE"}
            </Heading>
            <Hide breakpoint="(max-width: 600px)">
              <Switch
                isChecked={hasFile ? true : false}
                size="lg"
                onChange={() => {
                  onSwitchChange(!hasFile);
                }}
              />
            </Hide>
            <Show breakpoint="(max-width: 600px)">
              <Switch
                isChecked={hasFile ? true : false}
                size="md"
                onChange={() => {
                  onSwitchChange(!hasFile);
                }}
              />
            </Show>
          </HStack>
        </Box>
      </Flex>

      {hasFile ? (
        <PacientsWithFile flag={flag} setFlag={setFlag} />
      ) : (
        <PacientsWithoutFile flag={flag} setFlag={setFlag} />
      )}
    </>
  );
}
