import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { isEmpty, validateEmail } from "../../../../validations/validations";
import { Field, Form, Formik, FormikProps } from "formik";
import {
  FormControl,
  Input,
  FormErrorMessage,
  Center,
  Stack,
  FormLabel,
  Flex,
  Select,
  Button,
  Spacer,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

import { WarningTwoIcon } from "@chakra-ui/icons";
import User from "../../../../models/User";
import UserService from "../../../../services/UserService";
import RolService from "../../../../services/RolService";
import Rol from "../../../../models/Rol";
import Person from "../../../../models/Person";

interface values {
  nombre: string;
  paterno: string;
  materno: string;
  telefono: string;
  edad: number;
  rolId: number;
  username: string;
  password: string;
}

type props = {
  flag: boolean;
  setFlag: Function;
};

export function ListUsers({ flag, setFlag }: props) {
  const [roles, setRoles] = useState<Rol[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [userToEdit, setUserToEdit] = useState<User>();
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const getUsers = () => {
    UserService.getAllUsers()
      .then((response) => {
        setUsers(response);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Hubo un error al recuperar los usuarios",
        });
      });
  };

  useEffect(() => {
    getUsers();
    getRoles();
  }, [flag]);

  const handleUpdateClick = (id: number) => {
    setUserToEdit(users.find((user) => user.id === id));
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(id)
          .then(() => {
            Swal.fire({ title: "Usuario eliminado", icon: "success" });
            setFlag(!flag);
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Hubo un error al eliminar al usuario",
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
              <Th w={"40%"}>Usuario</Th>
              <Th w={"20%"}>Rol</Th>
              <Th w={"15%"}></Th>
              <Th w={"15%"}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.length > 0 &&
              users.map((user) => {
                return user.rol?.descripcion === "Administrador" ? (
                  <></>
                ) : (
                  <Tr key={user.id} id={"fila-user-" + user.id}>
                    <Td isNumeric>{user.id}</Td>
                    <Td>{user.username}</Td>
                    <Td>{user.rol?.nombre}</Td>
                    <Td>
                      <Button
                        w={"100%"}
                        colorScheme={"purple"}
                        onClick={() => {
                          handleUpdateClick(user.id!);
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
                        onClick={() => handleDeleteClick(user.id!)}
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
        <ModalContent bg={"cyan.200"}>
          <ModalHeader>Editar informaci&oacute;n del usuario</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
            <Box p={8} bg={"white"} border={"1px"} borderRadius={"15px"}>
              <Formik
                initialValues={{
                  nombre: userToEdit?.persona?.nombre || "",
                  paterno: userToEdit?.persona?.paterno || "",
                  materno: userToEdit?.persona?.materno || "",
                  telefono: userToEdit?.persona?.telefono || "",
                  edad: userToEdit?.persona?.edad || -1,
                  rolId: userToEdit?.rolId || -1,
                  username: userToEdit?.username || "",
                  password: "",
                }}
                onSubmit={async (values, actions) => {
                  const user = new User();
                  const person = new Person();

                  person.nombre = values.nombre;
                  person.paterno = values.paterno;
                  person.materno = values.materno;
                  person.telefono = values.telefono;
                  person.edad = values.edad;

                  user.id = userToEdit?.id;
                  user.username = values.username;
                  user.password = values.password;
                  user.persona = person;
                  user.rolId = values.rolId;

                  actions.setSubmitting(false);
                  UserService.updateUser(user)
                    .then(() => {
                      Swal.fire({
                        title: "Usuario modificado",
                        icon: "success",
                      });
                      setFlag(!flag);
                      onClose();
                    })
                    .catch(() => {
                      Swal.fire({
                        icon: "error",
                        title: "Hubo un error al modificar al usuario",
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
                      <Field name="paterno" validate={isEmpty}>
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired
                            isInvalid={
                              form.errors.paterno && form.touched.paterno
                            }
                          >
                            <FormLabel htmlFor="paterno">
                              APELLIDO PATERNO
                            </FormLabel>
                            <Input {...field} type="text" />
                            <Center>
                              <FormErrorMessage>
                                <WarningTwoIcon marginRight={"4px"} />
                                {form.errors.paterno}
                              </FormErrorMessage>
                            </Center>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="materno" validate={isEmpty}>
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired
                            isInvalid={
                              form.errors.materno && form.touched.materno
                            }
                          >
                            <FormLabel htmlFor="materno">
                              APELLIDO MATERNO
                            </FormLabel>
                            <Input {...field} type="text" />
                            <Center>
                              <FormErrorMessage>
                                <WarningTwoIcon marginRight={"4px"} />
                                {form.errors.materno}
                              </FormErrorMessage>
                            </Center>
                          </FormControl>
                        )}
                      </Field>

                      <Flex gap={5}>
                        <Box w="40%">
                          <Field name="telefono" validate={isEmpty}>
                            {({ field, form }: any) => (
                              <FormControl
                                isRequired
                                isInvalid={
                                  form.errors.telefono && form.touched.telefono
                                }
                              >
                                <FormLabel htmlFor="telefono">
                                  TELEFONO
                                </FormLabel>
                                <Input {...field} type="text" />
                                <Center>
                                  <FormErrorMessage>
                                    <WarningTwoIcon marginRight={"4px"} />
                                    {form.errors.telefono}
                                  </FormErrorMessage>
                                </Center>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                        <Box w="25%">
                          <Field name="edad" validate={isEmpty}>
                            {({ field, form }: any) => (
                              <FormControl
                                isRequired
                                isInvalid={
                                  form.errors.edad && form.touched.edad
                                }
                              >
                                <FormLabel htmlFor="edad">EDAD</FormLabel>
                                <Input {...field} type="number" />
                                <Center>
                                  <FormErrorMessage>
                                    <WarningTwoIcon marginRight={"4px"} />
                                    {form.errors.edad}
                                  </FormErrorMessage>
                                </Center>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                        <Box w="35%">
                          <Field as="select" name="rolId" validate={isEmpty}>
                            {({ field, form }: any) => (
                              <FormControl
                                isRequired
                                isInvalid={
                                  form.errors.rolId && form.touched.rolId
                                }
                              >
                                <FormLabel htmlFor="rol">ROL</FormLabel>
                                <Select
                                  placeholder="Elige un rol ..."
                                  value={props.values.rolId}
                                  onChange={(value) =>
                                    props.setFieldValue(
                                      "rolId",
                                      value.currentTarget.value
                                    )
                                  }
                                >
                                  {roles.length > 0 &&
                                    roles.map((rol) => {
                                      return (
                                        <option value={rol.id}>
                                          {rol.nombre}
                                        </option>
                                      );
                                    })}
                                </Select>
                                <Center>
                                  <FormErrorMessage>
                                    <WarningTwoIcon marginRight={"4px"} />
                                    {form.errors.rol}
                                  </FormErrorMessage>
                                </Center>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                      </Flex>

                      <Flex gap={5}>
                        <Box w="50%">
                          <Field name="username" validate={validateEmail}>
                            {({ field, form }: any) => (
                              <FormControl
                                isRequired
                                isInvalid={
                                  form.errors.username && form.touched.username
                                }
                              >
                                <FormLabel htmlFor="username">
                                  USUARIO
                                </FormLabel>
                                <Input {...field} type="email" />
                                <Center>
                                  <FormErrorMessage>
                                    <WarningTwoIcon marginRight={"4px"} />
                                    {form.errors.username}
                                  </FormErrorMessage>
                                </Center>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                        <Box w="50%">
                          <Field name="password">
                            {({ field, form }: any) => (
                              <FormControl
                                isInvalid={
                                  form.errors.password && form.touched.password
                                }
                              >
                                <FormLabel htmlFor="password">
                                  NUEVA CONTRASE&Ntilde;A
                                </FormLabel>
                                <Input {...field} type="text" />
                                <Center>
                                  <FormErrorMessage>
                                    <WarningTwoIcon marginRight={"4px"} />
                                    {form.errors.password}
                                  </FormErrorMessage>
                                </Center>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                      </Flex>
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
