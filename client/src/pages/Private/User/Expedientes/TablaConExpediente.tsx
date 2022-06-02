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
} from "@chakra-ui/react";

import { EditFile } from "./EditarExpediente";
import PacienteService from "../../../../services/PacientService";
import Pacient from "../../../../models/Pacient";
import FileService from "../../../../services/FileService";
import File from "../../../../models/File";
import { AuthContext, IAuthContext } from "../../../../context/useAuth";
import { isPermitted } from "../../../../validations/validations";

type props = {
  flag: boolean;
  setFlag: Function;
};

const PacientsWithFile = ({ flag, setFlag }: props) => {
  const [pacientes, setPacientes] = useState<Pacient[]>([]);
  const [pacienteActual, setPacienteActual] = useState(-1);
  const [fileActual, setFileActual] = useState<File>();
  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const {
    isOpen: isEditOpen,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const actualizarPacientes = () => {
    PacienteService.getAllPacientsWithFiles()
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

  const handleUpdateClick = (id: number) => {
    if (isPermitted(currentUser?.rol?.canEdit!)) return;
    FileService.getFileByPacientId(id)
      .then((response) => {
        setFileActual(response);
        setPacienteActual(id);
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        FileService.deleteFile(id)
          .then((c) => {
            console.log(id);
            Swal.fire({ title: "Expediente eliminado", icon: "success" });
            actualizarPacientes();
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Hubo un error al eliminar el expediente",
            });
          });
      }
    });
  };

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th isNumeric w={"10%"}>
                #
              </Th>
              <Th w={"40%"}>Paciente</Th>
              <Th w={"20%"}>Telefono</Th>
              <Th w={"5%"}></Th>
              <Th w={"5%"}></Th>
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
                        colorScheme={"purple"}
                        onClick={() => {
                          handleUpdateClick(paciente.id!);
                        }}
                      >
                        EDITAR
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
        <ModalContent bg={"#38C8B0"}>
          <ModalHeader color={"white"}>
            Editar informaci&oacute;n del expediente
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} pt={6}>
            <Box p={8} bg={"white"} border={"1px"} borderRadius={"15px"}>
              <EditFile
                flag={flag}
                setFlag={setFlag}
                pacientId={pacienteActual}
                onCloseEdit={onCloseEdit}
                filetoEdit={fileActual!}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PacientsWithFile;
