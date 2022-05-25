import React, { useEffect, useState } from "react";

import { isEmpty, validateEmail } from "../../../../validations/validations";
import { Field, Form, Formik, FormikProps } from "formik";
import {
  Button,
  FormControl,
  Input,
  FormErrorMessage,
  Center,
  Stack,
  FormLabel,
  Box,
  Flex,
  Spacer,
  Select,
} from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

import Swal from "sweetalert2";
import Person from "../../../../models/Person";
import User from "../../../../models/User";
import UserService from "../../../../services/UserService";
import RolService from "../../../../services/RolService";
import Rol from "../../../../models/Rol";

interface values {
  nombre: string;
  paterno: string;
  materno: string;
  edad: number;
  telefono: string;
  rol: number;
  username: string;
  password: string;
}

type props = {
  flag: boolean;
  setFlag: Function;
};

export function CreateUser({ flag, setFlag }: props) {
  const [roles, setRoles] = useState<Rol[]>([]);

  useEffect(() => {
    RolService.getAllRoles()
      .then((response) => {
        setRoles(response);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Hubo un error al recuperar los roles",
        });
      });
  }, [flag]);

  return (
    <Box border={"1px"} borderRadius="15px" borderStyle={"solid"}>
      <Box pt={"3%"} pl={"3%"} pr={"3%"}>
        <Formik
          initialValues={{
            nombre: "",
            paterno: "",
            materno: "",
            telefono: "",
            edad: 0,
            rol: 0,
            username: "",
            password: "",
          }}
          onSubmit={async (values, actions) => {
            const person = new Person();
            person.nombre = values.nombre;
            person.paterno = values.paterno;
            person.materno = values.materno;
            person.telefono = values.telefono;
            person.edad = values.edad;

            const newUser = new User();
            newUser.persona = person;
            newUser.username = values.username;
            newUser.password = values.password;
            newUser.rolId = Number(values.rol);

            actions.setSubmitting(false);
            UserService.createUser(newUser).then((response) => {
              if (response.error) {
                Swal.fire({
                  icon: "error",
                  title: "Hubo un error al agregar al usuario",
                });
              } else {
                actions.resetForm();
                let selectRoles = document.getElementById(
                  "select-roles-user"
                ) as HTMLSelectElement;
                selectRoles.selectedIndex = 0;
                setFlag(!flag);
                Swal.fire({ title: "Usuario agregado", icon: "success" });
              }
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
                      isInvalid={form.errors.nombre && form.touched.nombre}
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
                      isInvalid={form.errors.paterno && form.touched.paterno}
                    >
                      <FormLabel htmlFor="paterno">APELLIDO PATERNO</FormLabel>
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
                      isInvalid={form.errors.materno && form.touched.materno}
                    >
                      <FormLabel htmlFor="materno">APELLIDO MATERNO</FormLabel>
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
                          <FormLabel htmlFor="telefono">TELEFONO</FormLabel>
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
                          isInvalid={form.errors.edad && form.touched.edad}
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
                    <Field name="rol" validate={isEmpty}>
                      {({ field, form }: any) => (
                        <FormControl
                          isRequired
                          isInvalid={form.errors.rol && form.touched.rol}
                        >
                          <FormLabel htmlFor="rol">ROL</FormLabel>
                          <Select
                            id="select-roles-user"
                            placeholder="Elige un rol ..."
                            onChange={(value) =>
                              props.setFieldValue(
                                "rol",
                                value.currentTarget.value
                              )
                            }
                          >
                            {roles.length > 0 &&
                              roles.map((rol) => {
                                return (
                                  <option value={rol.id}>{rol.nombre}</option>
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
                          <FormLabel htmlFor="username">USUARIO</FormLabel>
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
                    <Field name="password" validate={isEmpty}>
                      {({ field, form }: any) => (
                        <FormControl
                          isRequired
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <FormLabel htmlFor="password">
                            CONTRASE&Ntilde;A
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
                  <Button
                    w={"20%"}
                    mb={15}
                    type="submit"
                    color="#fff"
                    backgroundColor="green"
                    isLoading={props.isSubmitting}
                    _hover={{
                      color: "#fff",
                      backgroundColor: "#808080",
                    }}
                  >
                    AGREGAR
                  </Button>
                </Flex>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
