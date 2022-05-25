import React from "react";

import { isEmpty } from "../../../../validations/validations";
import { Field, Form, Formik, FormikProps } from "formik";
import {
  FormControl,
  Input,
  FormErrorMessage,
  Center,
  Stack,
  FormLabel,
  Box,
  Textarea,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { WarningTwoIcon } from "@chakra-ui/icons";
import File from "../../../../models/File";
import FileService from "../../../../services/FileService";
import Swal from "sweetalert2";

interface values {
  enfermedad: string;
  antecedentes: string;
  evolucion: string;
  anamnesis: string;
  exploracion: string;
  tratamiento: string;
}

type props = {
  pacientId: number;
  onCloseCreate: Function;
  actualizarVista: Function;
};

export function CreateFile({
  pacientId,
  onCloseCreate,
  actualizarVista,
}: props) {
  return (
    <>
      <Box>
        <Formik
          initialValues={{
            enfermedad: "",
            antecedentes: "",
            evolucion: "",
            anamnesis: "",
            exploracion: "",
            tratamiento: "",
          }}
          onSubmit={async (values, actions) => {
            const exp = new File();
            exp.enfermedadActual = values.enfermedad;
            exp.antecedentes = values.antecedentes;
            exp.evolucion = values.evolucion;
            exp.anamnesis = values.anamnesis;
            exp.exploracion = values.exploracion;
            exp.tratamiento = values.tratamiento;
            exp.pacienteId = pacientId;

            FileService.createFile(exp)
              .then(() => {
                Swal.fire({ title: "Expediente creado", icon: "success" });
                actualizarVista();
              })
              .catch(() => {
                Swal.fire({
                  icon: "error",
                  title: "Hubo un error al crear el Expediente",
                });
              });
            actions.setSubmitting(false);
            onCloseCreate();
          }}
        >
          {(props: FormikProps<values>) => (
            <Form>
              <Stack spacing={6}>
                <Field name="enfermedad" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={
                        form.errors.enfermedad && form.touched.enfermedad
                      }
                    >
                      <FormLabel htmlFor="enfermedad">
                        ENFERMEDAD ACTUAL
                      </FormLabel>
                      <Input {...field} type="text" />
                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.enfermedad}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Field name="antecedentes" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={
                        form.errors.antecedentes && form.touched.antecedentes
                      }
                    >
                      <FormLabel htmlFor="antecedentes">ANTECEDENTES</FormLabel>
                      <Textarea {...field} placeholder="Descripcion" />
                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.antecedentes}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Field name="evolucion" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={
                        form.errors.evolucion && form.touched.evolucion
                      }
                    >
                      <FormLabel htmlFor="antecedentes">EVOLUCION</FormLabel>
                      <Textarea {...field} placeholder="Descripcion" />

                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.evolucion}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Field name="anamnesis" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={
                        form.errors.anamnesis && form.touched.anamnesis
                      }
                    >
                      <FormLabel htmlFor="antecedentes">ANAMNESIS</FormLabel>
                      <Textarea {...field} placeholder="Descripcion" />

                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.anamnesis}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Field name="exploracion" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={
                        form.errors.exploracion && form.touched.exploracion
                      }
                    >
                      <FormLabel htmlFor="antecedentes">
                        EXPLORACI&Oacute;N F&Iacute;SICA
                      </FormLabel>
                      <Textarea {...field} placeholder="Descripcion" />

                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.exploracion}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Field name="tratamiento" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={
                        form.errors.tratamiento && form.touched.tratamiento
                      }
                    >
                      <FormLabel htmlFor="antecedentes">TRATAMIENTO</FormLabel>
                      <Textarea {...field} placeholder="Descripcion" />

                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.tratamiento}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Flex>
                  <Spacer></Spacer>
                  <Button type="submit" colorScheme="green" mr={3}>
                    Crear
                  </Button>
                  <Button colorScheme="red" onClick={() => onCloseCreate()}>
                    Cancelar
                  </Button>
                </Flex>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}
