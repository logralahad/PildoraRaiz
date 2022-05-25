import React from "react";

import { isEmpty, isValidNumber } from "../../../../validations/validations";
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
  InputGroup,
  Text,
  Flex,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import Consultation from "../../../../models/Consultation";
import ConsultasService from "../../../../services/ConsultationService";
import Swal from "sweetalert2";

interface values {
  motivo: string;
  duracion: number;
  cronologia: string;
  sintomas: string;
}

type props = {
  pacientId: number;
  onCloseCreate: Function;
  actualizarConsultas: Function;
};

export function CreateConsultation({
  pacientId,
  onCloseCreate,
  actualizarConsultas,
}: props) {
  return (
    <>
      <Box>
        <Formik
          initialValues={{
            motivo: "",
            sintomas: "",
            duracion: 0,
            cronologia: "",
          }}
          onSubmit={async (values, actions) => {
            const consulta = new Consultation();
            consulta.motivo = values.motivo;
            consulta.sintomas = values.sintomas;
            consulta.duracion = values.duracion;
            consulta.cronologia = values.cronologia;
            consulta.pacienteId = pacientId;

            ConsultasService.createConsulta(consulta)
              .then(() => {
                Swal.fire({ title: "Consulta agregada", icon: "success" });
                actualizarConsultas(pacientId);
              })
              .catch(() => {
                Swal.fire({
                  icon: "error",
                  title: "Hubo un error al agregar la consulta",
                });
              });

            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {(props: FormikProps<values>) => (
            <Form>
              <Stack spacing={6}>
                <Field name="motivo" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.motivo && form.touched.motivo}
                    >
                      <FormLabel htmlFor="motivo">MOTIVO</FormLabel>
                      <Textarea {...field} placeholder="Descripcion" />
                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.motivo}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Field name="duracion" validate={isValidNumber}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.duracion && form.touched.duracion}
                    >
                      <FormLabel htmlFor="duracion">DURACI&Oacute;N</FormLabel>
                      <InputGroup gap={5}>
                        <Input {...field} type="number" />
                        <Text h={"100%"} fontSize="2xl">
                          minutos
                        </Text>
                      </InputGroup>
                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.duracion}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Field name="sintomas" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.sintomas && form.touched.sintomas}
                    >
                      <FormLabel htmlFor="sintomas">S&Iacute;NTOMAS</FormLabel>
                      <Textarea {...field} placeholder="Descripcion" />
                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.sintomas}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Field name="cronologia" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={
                        form.errors.cronologia && form.touched.cronologia
                      }
                    >
                      <FormLabel htmlFor="cronologia">
                        CRONOLOG&Iacute;A
                      </FormLabel>
                      <Textarea {...field} placeholder="Descripcion" />
                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.cronologia}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Flex>
                  <Spacer></Spacer>
                  <Button type="submit" colorScheme="green" mr={3}>
                    Agregar
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
