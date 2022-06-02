import React, { useContext, useEffect, useState } from "react";
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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

import { EditPacient } from "./EditarPaciente";
import { CreatePacient } from "./CrearPaciente";
import { isNumeric, isPermitted } from "../../../../validations/validations";
import Pacient from "../../../../models/Pacient";
import { AuthContext, IAuthContext } from "../../../../context/useAuth";
import PacienteService from "../../../../services/PacientService";

type props = {
  flag: boolean;
  setFlag: Function;
};

export function ListPacients({ flag, setFlag }: props) {
  const [pacientes, setPacientes] = useState<Pacient[]>([]);
  const [pacienteToEdit, setPacienteToEdit] = useState<Pacient>();
  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const {
    isOpen: isEditOpen,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const {
    isOpen: isCreateOpen,
    onOpen: onOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();

  useEffect(() => {
    getPacientes();
  }, [flag]);

  const getPacientes = () => {
    PacienteService.getAllPacientsByUserId(currentUser?.id!)
      .then((response) => {
        setPacientes(response);
      })
      .catch(() =>
        Swal.fire({
          icon: "error",
          title: "Hubo un error al recuperar los pacientes",
        })
      );
  };

  const handleUpdateClick = (id: number) => {
    if (isPermitted(currentUser?.rol?.canEdit!)) return;
    PacienteService.getPacientById(id)
      .then((response) => {
        setPacienteToEdit(response);
        onOpenEdit();
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteClick = (id: number) => {
    if (isPermitted(currentUser?.rol?.canDelete!)) return;
    Swal.fire({
      title: "¿Está seguro que desea eliminarlo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        PacienteService.deletePaciente(id)
          .then(() => {
            Swal.fire({ title: "Paciente eliminado", icon: "success" });
            getPacientes();
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Hubo un error al eliminar al paciente",
            });
          });
      }
    });
  };

  return (
    <>
      <Flex p={5}>
        <Box w={"60%"}>
          <HStack>
            <Heading mr={3}>PACIENTES:</Heading>
          </HStack>
        </Box>
        <Spacer />
        <Box w={"25%"}>
          <Button
            w={"100%"}
            whiteSpace={"normal"}
            wordBreak={"break-word"}
            bg={"#38C8B0"}
            color={"white"}
            borderRadius={"15px"}
            onClick={() => {
              if (isPermitted(currentUser?.rol?.canCreate!)) return;
              onOpenCreate();
            }}
          >
            <Text fontSize="md" noOfLines={2}>
              REGISTRAR PACIENTE
            </Text>
          </Button>
        </Box>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th isNumeric w={"10%"}>
                #
              </Th>
              <Th w={"40%"}>Nombre</Th>
              <Th w={"20%"}>Telefono</Th>
              <Th w={"15%"}></Th>
              <Th w={"15%"}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {pacientes.length > 0 &&
              pacientes.map((paciente) => {
                return (
                  <Tr key={paciente.id} id={"fila-paciente-" + paciente.id}>
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
                        colorScheme={"purple"}
                        onClick={() => handleUpdateClick(paciente.id!)}
                      >
                        Editar
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        w={"100%"}
                        colorScheme={"red"}
                        onClick={() => handleDeleteClick(paciente.id!)}
                      >
                        Eliminar
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isEditOpen} onClose={onCloseEdit} size={"4xl"}>
        <ModalOverlay />
        <ModalContent bg={"#edff21"}>
          <ModalHeader>Editar informaci&oacute;n del paciente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} pt={6}>
            <Box p={8} bg={"white"} border={"1px"} borderRadius={"15px"}>
              <EditPacient
                userId={currentUser?.id!}
                pacientToEdit={pacienteToEdit!}
                onCloseEdit={onCloseEdit}
                flag={flag}
                setFlag={setFlag}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isCreateOpen} onClose={onCloseCreate} size={"4xl"}>
        <ModalOverlay />
        <ModalContent bg={"#edff21"}>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody pb={6} pt={6}>
            <Box p={8} bg={"white"} border={"1px"} borderRadius={"15px"}>
              <CreatePacient
                userId={currentUser?.id!}
                onCloseCreate={onCloseCreate}
                flag={flag}
                setFlag={setFlag}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
