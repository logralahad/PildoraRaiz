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
  FormControl,
  Input,
  FormErrorMessage,
  Center,
  Stack,
  FormLabel,
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { WarningTwoIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCircleXmark,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import { isEmpty } from "../../../../validations/validations";
import { Field, Form, Formik, FormikProps } from "formik";
import Rol from "../../../../models/Rol";
import RolService from "../../../../services/RolService";

interface values {
  nombre: string;
  descripcion: string;
}

type props = {
  flag: boolean;
  setFlag: Function;
};

export function ListRoles({ flag, setFlag }: props) {
  const [roles, setRoles] = useState<Rol[]>([]);
  const [rolToEdit, setRolToEdit] = useState<Rol>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [clean, setClean] = useState(false);

  const getRoles = () => {
    RolService.getAllRoles()
      .then((response) => {
        setRoles(response);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Hubo un error al recuperar los roles.",
        });
      });
  };

  useEffect(() => {
    getRoles();
  }, [flag]);

  const handleUpdateClick = (id: number) => {
    const newRolToEdit = roles.find((rol) => rol.id === id);
    setRolToEdit(newRolToEdit);
    setCreate(newRolToEdit?.canCreate!);
    setEdit(newRolToEdit?.canEdit!);
    setClean(newRolToEdit?.canDelete!);
  };

  const handleDeleteClick = (id: number) => {
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
        RolService.deleteRol(id)
          .then(() => {
            Swal.fire({ title: "Rol eliminado", icon: "success" });
            setFlag(!flag);
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Hubo un error al eliminar el rol",
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
              <Th w={"20%"}>Nombre</Th>
              <Th w={"40%"}>Descripcion</Th>
              <Th w={"15%"}></Th>
              <Th w={"15%"}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {roles.length > 0 &&
              roles.map((rol) => {
                return rol.id === Number(process.env.REACT_APP_ADMIN_ROL) ? (
                  <></>
                ) : (
                  <Tr key={rol.id} id={"fila-rol-" + rol.id}>
                    <Td isNumeric>{rol.id}</Td>
                    <Td>{rol.nombre}</Td>
                    <Td>{rol.descripcion}</Td>
                    <Td>
                      <Button
                        w={"100%"}
                        colorScheme={"purple"}
                        onClick={() => {
                          handleUpdateClick(rol.id!);
                          onOpen();
                        }}
                      >
                        Editar
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        w={"100%"}
                        colorScheme={"red"}
                        onClick={() => handleDeleteClick(rol.id!)}
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
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent bg={"#edff21"}>
          <ModalHeader>Editar informaci&oacute;n del rol</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} pt={6}>
            <Box p={8} bg={"white"} border={"1px"} borderRadius={"15px"}>
              <Formik
                initialValues={{
                  nombre: rolToEdit?.nombre!,
                  descripcion: rolToEdit?.descripcion!,
                }}
                onSubmit={async (values, actions) => {
                  const updatedRol = new Rol();
                  updatedRol.id = rolToEdit?.id!;
                  updatedRol.nombre = values.nombre;
                  updatedRol.descripcion = values.descripcion;
                  updatedRol.canCreate = create;
                  updatedRol.canEdit = edit;
                  updatedRol.canDelete = clean;

                  actions.setSubmitting(false);
                  RolService.updateRol(updatedRol)
                    .then(() => {
                      Swal.fire({
                        title: "Rol modificado",
                        icon: "success",
                      });
                      setFlag(!flag);
                      onClose();
                    })
                    .catch(() => {
                      Swal.fire({
                        icon: "error",
                        title: "Hubo un error al modificar al rol",
                      });
                    });
                }}
              >
                {(props: FormikProps<values>) => (
                  <Form>
                    <Stack spacing={6}>
                      <Field name="nombre" validate={isEmpty}>
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired
                            isInvalid={
                              form.errors.nombre && form.touched.nombre
                            }
                          >
                            <FormLabel htmlFor="nombre">NOMBRE</FormLabel>
                            <Input {...field} type="text" />
                            <Center>
                              <FormErrorMessage>
                                <WarningTwoIcon marginRight={"4px"} />
                                {form.errors.nombre}
                              </FormErrorMessage>
                            </Center>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="descripcion" validate={isEmpty}>
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired
                            isInvalid={
                              form.errors.descripcion &&
                              form.touched.descripcion
                            }
                          >
                            <FormLabel htmlFor="descripcion">
                              DESCRIPCION
                            </FormLabel>
                            <Input {...field} type="text" />
                            <Center>
                              <FormErrorMessage>
                                <WarningTwoIcon marginRight={"4px"} />
                                {form.errors.descripcion}
                              </FormErrorMessage>
                            </Center>
                          </FormControl>
                        )}
                      </Field>
                      <SimpleGrid columns={3} spacing="2%">
                        <Button
                          bg={create ? "green.200" : "white"}
                          border={"1px"}
                          height="300px"
                          borderRadius={"15px"}
                          type={"button"}
                          onClick={() => setCreate(!create)}
                        >
                          <VStack>
                            <FontAwesomeIcon
                              icon={faAdd}
                              size="4x"
                              color="green"
                            />
                            <Heading as="h2" size="lg">
                              CREAR
                            </Heading>
                          </VStack>
                        </Button>
                        <Button
                          bg={edit ? "green.200" : "white"}
                          border={"1px"}
                          height="300px"
                          borderRadius={"15px"}
                          type={"button"}
                          onClick={() => setEdit(!edit)}
                        >
                          <VStack>
                            <FontAwesomeIcon
                              icon={faEdit}
                              size="4x"
                              color="#e6e600"
                            />
                            <Heading as="h2" size="lg">
                              EDITAR
                            </Heading>
                          </VStack>
                        </Button>
                        <Button
                          bg={clean ? "green.200" : "white"}
                          border={"1px"}
                          height="300px"
                          borderRadius={"15px"}
                          type={"button"}
                          onClick={() => setClean(!clean)}
                        >
                          <VStack>
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              size="4x"
                              color="red"
                            />
                            <Heading as="h2" size="lg">
                              BORRAR
                            </Heading>
                          </VStack>
                        </Button>
                      </SimpleGrid>
                      <Flex>
                        <Spacer />
                        <Button colorScheme="blue" mr={3} type="submit">
                          Guardar
                        </Button>
                        <Button colorScheme="red" onClick={() => onClose()}>
                          Cancelar
                        </Button>
                      </Flex>
                    </Stack>
                  </Form>
                )}
              </Formik>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
