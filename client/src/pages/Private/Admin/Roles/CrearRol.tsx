import React, { useState } from "react";

import { isEmpty } from "../../../../validations/validations";

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
  SimpleGrid,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAdd,
  faCircleXmark,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { WarningTwoIcon } from "@chakra-ui/icons";

import Rol from "../../../../models/Rol";
import RolService from "../../../../services/RolService";
import Swal from "sweetalert2";

interface values {
  nombre: string;
  descripcion: string;
}

type props = {
  flag: boolean;
  setFlag: Function;
};

export function CreateRol({ flag, setFlag }: props) {
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [clean, setClean] = useState(false);

  return (
    <Box border={"1px"} borderRadius="15px" borderStyle={"solid"}>
      <Box p={"3%"}>
        <Formik
          initialValues={{
            nombre: "",
            descripcion: "",
          }}
          onSubmit={async (values, actions) => {
            const rol = new Rol();
            rol.nombre = values.nombre;
            rol.descripcion = values.descripcion;
            rol.canCreate = create;
            rol.canEdit = edit;
            rol.canDelete = clean;

            RolService.createRol(rol)
              .then(() => {
                Swal.fire({ title: "Rol agregado", icon: "success" });
                setFlag(!flag);
              })
              .catch(() => {
                Swal.fire({
                  icon: "error",
                  title: "Hubo un error al agregar al usuario",
                });
              });
            actions.setSubmitting(false);
            actions.resetForm();
            setCreate(false);
            setEdit(false);
            setClean(false);
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
                <Field name="descripcion" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={
                        form.errors.descripcion && form.touched.descripcion
                      }
                    >
                      <FormLabel htmlFor="descripcion">DESCRIPCION</FormLabel>
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
                      <FontAwesomeIcon icon={faAdd} size="4x" color="green" />
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
                  <Button
                    w={"20%"}
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
