import React, { useState } from "react";

import {
  isEmpty,
  isPhoneValid,
  isValidNumber,
} from "../../../../validations/validations";

import { Field, Form, Formik, FormikProps } from "formik";
import {
  FormControl,
  Input,
  FormErrorMessage,
  Center,
  Stack,
  FormLabel,
  Box,
  Flex,
  Wrap,
  WrapItem,
  Avatar,
  Hide,
  Show,
  Button,
  Spacer,
} from "@chakra-ui/react";

import { WarningTwoIcon } from "@chakra-ui/icons";
import Pacient from "../../../../models/Pacient";
import Swal from "sweetalert2";
import Person from "../../../../models/Person";
import PacienteService from "../../../../services/PacientService";
import ImagenesService from "../../../../services/ImagesService";

interface values {
  nombre: string;
  paterno: string;
  materno: string;
  edad: number;
  calle: string;
  colonia: string;
  int: string;
  ext: string;
  img: string;
}

type props = {
  userId: number;
  pacientToEdit: Pacient;
  onCloseEdit: Function;
  setFlag: Function;
  flag: boolean;
};

export function EditPacient({
  userId,
  pacientToEdit,
  onCloseEdit,
  flag,
  setFlag,
}: props) {
  const [image, setImage] = useState(pacientToEdit.img!);
  const [file, setFile] = useState<File | undefined>();

  const doClickOnInput = () => {
    var input = document.getElementById("cambiarImagen") as HTMLInputElement;
    input?.click();
  };

  const savePacient = (pacient: Pacient) => {
    PacienteService.updatePaciente(pacient).then((response) => {
      if (response.error) {
        Swal.fire({
          icon: "error",
          title: "Hubo un error al guardar al paciente",
        });
      } else {
        Swal.fire({
          title: "Paciente actualizado",
          icon: "success",
        });
        setFlag(!flag);
        onCloseEdit();
      }
    });
  };

  return (
    <>
      <Box>
        <Formik
          initialValues={{
            nombre: pacientToEdit.persona?.nombre!,
            paterno: pacientToEdit.persona?.paterno!,
            materno: pacientToEdit.persona?.materno!,
            telefono: pacientToEdit.persona?.telefono!,
            edad: pacientToEdit.persona?.edad!,
            calle: pacientToEdit.calle!,
            colonia: pacientToEdit.colonia!,
            int: pacientToEdit.int!,
            ext: pacientToEdit.ext!,
            img: image,
          }}
          onSubmit={async (values, actions) => {
            const person = new Person();
            person.nombre = values.nombre;
            person.paterno = values.paterno;
            person.materno = values.materno;
            person.telefono = values.telefono;
            person.edad = values.edad;

            const pacient = new Pacient();
            pacient.persona = person;
            pacient.id = pacientToEdit.id;
            pacient.calle = values.calle;
            pacient.colonia = values.colonia;
            pacient.int = values.int;
            pacient.ext = values.ext ? values.ext : "N/A";
            pacient.img = values.img ? values.img : "---";
            pacient.userId = userId;

            if (file) {
              ImagenesService.upload(file)
                .then((response) => {
                  ImagenesService.get(response.data)
                    .then((url) => {
                      pacient.img = url;
                      savePacient(pacient);
                    })
                    .catch((error) => console.log(error));
                })
                .catch((error) => console.log(error));
            } else {
              savePacient(pacient);
            }
            actions.setSubmitting(false);
          }}
        >
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
                <Box w="50%">
                  <Field name="telefono" validate={isPhoneValid}>
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
                <Box w="50%">
                  <Field name="edad" validate={isValidNumber}>
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
              </Flex>

              <Flex gap={5}>
                <Box w={"80%"}>
                  <Flex gap={5} pb={3}>
                    <Box w="65%">
                      <Field name="calle" validate={isEmpty}>
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired
                            isInvalid={form.errors.calle && form.touched.calle}
                          >
                            <FormLabel htmlFor="calle">CALLE</FormLabel>
                            <Input {...field} type="text" />
                            <Center>
                              <FormErrorMessage>
                                <WarningTwoIcon marginRight={"4px"} />
                                {form.errors.calle}
                              </FormErrorMessage>
                            </Center>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box w="35%">
                      <Field name="int" validate={isEmpty}>
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired
                            isInvalid={form.errors.int && form.touched.int}
                          >
                            <FormLabel htmlFor="int"># INT</FormLabel>
                            <Input {...field} type="text" />
                            <Center>
                              <FormErrorMessage>
                                <WarningTwoIcon marginRight={"4px"} />
                                {form.errors.int}
                              </FormErrorMessage>
                            </Center>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                  </Flex>

                  <Flex gap={5}>
                    <Box w="35%">
                      <Field name="ext" validate={isEmpty}>
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired
                            isInvalid={form.errors.ext && form.touched.ext}
                          >
                            <FormLabel htmlFor="ext"># EXT</FormLabel>
                            <Input {...field} type="text" />
                            <Center>
                              <FormErrorMessage>
                                <WarningTwoIcon marginRight={"4px"} />
                                {form.errors.ext}
                              </FormErrorMessage>
                            </Center>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box w="65%">
                      <Field name="colonia" validate={isEmpty}>
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired
                            isInvalid={
                              form.errors.colonia && form.touched.colonia
                            }
                          >
                            <FormLabel htmlFor="password">COLONIA</FormLabel>
                            <Input {...field} type="text" />
                            <Center>
                              <FormErrorMessage>
                                <WarningTwoIcon marginRight={"4px"} />
                                {form.errors.colonia}
                              </FormErrorMessage>
                            </Center>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                  </Flex>
                </Box>
                <Box w="20%">
                  <FormLabel>IMAGEN</FormLabel>
                  <Center>
                    <Input
                      type={"file"}
                      accept="image/*"
                      id={"cambiarImagen"}
                      onChange={(e) => {
                        const file = e.target.files![0];
                        if (file) {
                          setImage(URL.createObjectURL(file));
                          setFile(file);
                        }
                      }}
                      hidden
                    ></Input>
                    <Wrap>
                      <WrapItem>
                        <Hide breakpoint="(max-width: 960px)">
                          <Avatar
                            as={"button"}
                            type="button"
                            onClick={doClickOnInput}
                            size="2xl"
                            name="Segun Adebayo"
                            src={image}
                          />
                        </Hide>
                        <Show breakpoint="(max-width: 960px)">
                          <Hide breakpoint="(max-width: 620px)">
                            <Avatar
                              as={"button"}
                              type="button"
                              onClick={doClickOnInput}
                              size="xl"
                              name="Segun Adebayo"
                              src={image}
                            />
                          </Hide>
                        </Show>
                        <Show breakpoint="(max-width: 620px)">
                          <Avatar
                            as={"button"}
                            type="button"
                            onClick={doClickOnInput}
                            size="lg"
                            name="Segun Adebayo"
                            src={image}
                          />
                        </Show>
                      </WrapItem>
                    </Wrap>
                  </Center>
                </Box>
              </Flex>
              <Flex>
                <Spacer></Spacer>
                <Button type="submit" colorScheme="blue" mr={3}>
                  Guardar
                </Button>
                <Button colorScheme="red" onClick={() => onCloseEdit()}>
                  Cancelar
                </Button>
              </Flex>
            </Stack>
          </Form>
        </Formik>
      </Box>
    </>
  );
}
