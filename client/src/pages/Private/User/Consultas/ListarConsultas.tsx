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
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Flex,
  Text,
  Heading,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { EditConsultation } from "./EditarConsulta";
import { CreateConsultation } from "./CrearConsulta";
import ConsultasService from "../../../../services/ConsultationService";
import Consultation from "../../../../models/Consultation";
import { AuthContext, IAuthContext } from "../../../../context/useAuth";
import { isPermitted } from "../../../../validations/validations";

type props = {
  flag: boolean;
  setFlag: Function;
};

export function ListConsultations({ flag, setFlag }: props) {
  const [consultas, setConsultas] = useState<Consultation[]>([]);
  const [consultaToEdit, setConsultaToEdit] = useState<Consultation>();
  const [actual, setActual] = useState("");
  const [idAct, setIdAct] = useState(-1);
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
    getConsultas(idAct);
  }, [flag, idAct]);

  const getConsultas = (id: number) => {
    ConsultasService.getConsultationsByPacientId(id)
      .then((response) => {
        setConsultas(response);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Hubo un error al recuperar las consultas del usuario",
        });
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var identifier = event.target.value;
    let id;
    if (identifier === "") {
      id = -1;
    } else {
      id = Number(identifier);
    }
    getConsultas(id);
    setIdAct(id);
    setActual(identifier);
  };

  const handleUpdateClick = (id: number) => {
    setConsultaToEdit(consultas.find((consulta) => consulta.id === id));
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
        ConsultasService.deleteConsulta(id)
          .then(() => {
            Swal.fire({ title: "Consulta eliminada", icon: "success" });
            getConsultas(idAct);
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Hubo un error al eliminar la consulta",
            });
          });
      }
    });
  };

  return (
    <>
      <Flex p={5} px={6}>
        <Box w={"60%"}>
          <HStack>
            <Heading mr={3}>PACIENTE: </Heading>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type="text"
                value={actual}
                onChange={handleChange}
                placeholder="Identificador"
              />
            </InputGroup>
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
              idAct != -1
                ? onOpenCreate()
                : Swal.fire({
                    icon: "error",
                    title: "Debe escribir un identificador",
                  });
            }}
          >
            <Text fontSize="md" noOfLines={2}>
              REGISTRAR CONSULTA
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
              <Th w={"30%"}>Motivo</Th>
              <Th w={"30%"}>Sintomas</Th>
              <Th w={"15%"}></Th>
              <Th w={"15%"}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {consultas.length > 0 &&
              consultas.map((consulta) => {
                return (
                  <Tr key={consulta.id} id={"fila-consulta-" + consulta.id}>
                    <Td isNumeric>{consulta.id}</Td>
                    <Td>{consulta.motivo}</Td>
                    <Td>{consulta.sintomas}</Td>
                    <Td>
                      <Button
                        w={"100%"}
                        colorScheme={"purple"}
                        onClick={() => {
                          if (isPermitted(currentUser?.rol?.canEdit!)) return;
                          handleUpdateClick(consulta.id!);
                          onOpenEdit();
                        }}
                      >
                        Editar
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        w={"100%"}
                        colorScheme={"red"}
                        onClick={() => handleDeleteClick(consulta.id!)}
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
        <ModalContent bg={"#38C8B0"}>
          <ModalHeader color={"white"}>
            Editar informaci&oacute;n de la consulta
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} pt={6}>
            <Box p={8} bg={"white"} border={"1px"} borderRadius={"15px"}>
              <EditConsultation
                pacientId={idAct}
                consultaToEdit={consultaToEdit!}
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
        <ModalContent bg={"#38C8B0"}>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody pb={6} pt={6}>
            <Box p={8} bg={"white"} border={"1px"} borderRadius={"15px"}>
              <CreateConsultation
                pacientId={idAct}
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
