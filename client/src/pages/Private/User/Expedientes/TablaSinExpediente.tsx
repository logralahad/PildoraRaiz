import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

import { CreateFile } from "./CrearExpediente";
import Pacient from "../../../../models/Pacient";
import PacienteService from "../../../../services/PacientService";

type props = {
  flag: boolean;
  setFlag: Function;
};

const PacientsWithoutFile = ({ flag, setFlag }: props) => {
  const [pacientes, setPacientes] = useState<Pacient[]>([]);
  const [pacienteActual, setPacienteActual] = useState(-1);

  const {
    isOpen: isCreateOpen,
    onOpen: onOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();

  const actualizarPacientes = () => {
    PacienteService.getAllPacientsWithoutFiles()
      .then((response) => {
        setPacientes(response);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Hubo un error al recuperar los pacientes sin expedientes",
        });
      });
  };

  useEffect(() => {
    actualizarPacientes();
  }, [flag]);

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th isNumeric w={"10%"}>
                #
              </Th>
              <Th w={"50%"}>Paciente</Th>
              <Th w={"20%"}>Telefono</Th>
              <Th w={"10%"}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {pacientes.length > 0 &&
              pacientes.map((paciente) => {
                return (
                  <Tr key={paciente.id} id={"fila-expediente-" + paciente.id}>
                    <Td isNumeric>{paciente.id}</Td>
                    <Td>
                      {paciente.persona?.nombre +
                        " " +
                        paciente.persona?.materno}
                    </Td>
                    <Td>{paciente.persona?.telefono}</Td>
                    <Td>
                      <Button
                        w={"100%"}
                        bg={"#38C8B0"}
                        color={"white"}
                        onClick={() => {
                          setPacienteActual(paciente.id!);
                          onOpenCreate();
                        }}
                      >
                        CREAR
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isCreateOpen} onClose={onCloseCreate} size={"4xl"}>
        <ModalOverlay />
        <ModalContent bg={"#38C8B0"}>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody pb={6} pt={6}>
            <Box p={8} bg={"white"} border={"1px"} borderRadius={"15px"}>
              <CreateFile
                pacientId={pacienteActual}
                flag={flag}
                setFlag={setFlag}
                onCloseCreate={onCloseCreate}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PacientsWithoutFile;
