import React from "react";

import { isEmpty, validateEmail } from "../../../validations/validations";
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
  Textarea,
} from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

interface values {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

export function ContactMessage() {
  return (
    <Box border={"1px"} borderRadius="15px" borderStyle={"solid"} w={"100%"}>
      <Box p={"5%"}>
        <Formik
          initialValues={{
            nombre: "",
            correo: "",
            telefono: "",
            mensaje: "",
          }}
          onSubmit={async (values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
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
                <Field name="correo-contacto" validate={validateEmail}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.correo && form.touched.correo}
                    >
                      <FormLabel htmlFor="correo-contacto">CORREO</FormLabel>
                      <Input {...field} type="text" />
                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.correo}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Field name="telefono" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.telefono && form.touched.telefono}
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
                <Field name="mensaje" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.mensaje && form.touched.mensaje}
                    >
                      <FormLabel htmlFor="materno">MENSAJE</FormLabel>
                      <Textarea {...field} placeholder="Escribe tu mensaje" />
                      <Center>
                        <FormErrorMessage>
                          <WarningTwoIcon marginRight={"4px"} />
                          {form.errors.mensaje}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>

                <Button
                  type="submit"
                  color="#fff"
                  backgroundColor="green"
                  isLoading={props.isSubmitting}
                  _hover={{
                    color: "#fff",
                    backgroundColor: "#808080",
                  }}
                >
                  ENVIAR
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
