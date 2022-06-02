import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { validateEmail, isEmpty } from "../../../validations/validations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { Field, Form, Formik, FormikProps } from "formik";
import {
  Box,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  VStack,
  InputRightElement,
  FormControl,
  Input,
  FormErrorMessage,
  Center,
  Stack,
  LinkBox,
  LinkOverlay,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import User from "../../../models/User";
import UserService from "../../../services/UserService";
import { AuthContext, IAuthContext } from "../../../context/useAuth";

interface values {
  username_login_res: string;
  password_login_res: string;
}

export function LoginResponsive() {
  const [showPwd, setShowPwd] = useState(false);
  const handleClick = () => setShowPwd(!showPwd);
  const { currentUser, signin } = useContext(AuthContext) as IAuthContext;

  const navigate = useNavigate();

  if (currentUser) return <Navigate to="/" />;

  return (
    <Box
      bg={"#fff"}
      border="2px"
      borderStyle="dashed"
      borderRadius={"15px"}
      p={"5%"}
      w={"80%"}
    >
      <VStack spacing={30} align="stretch">
        <Flex>
          <Spacer></Spacer>
          <a href="/">
            <FontAwesomeIcon icon={faHome} color="#000"></FontAwesomeIcon>
          </a>
        </Flex>
        <Text textAlign={"center"} fontSize={"4xl"}>
          INICIAR SESIÓN
        </Text>
        <Formik
          initialValues={{
            username_login_res: "",
            password_login_res: "",
          }}
          onSubmit={async (values, actions) => {
            const userSignIn = new User();
            userSignIn.username = values.username_login_res;
            userSignIn.password = values.password_login_res;

            UserService.login(userSignIn)
              .then((response) => {
                if (response.message) {
                  actions.setErrors({
                    password_login_res: response.message,
                  });
                } else {
                  signin(userSignIn);
                  navigate("/");
                }
              })
              .catch((error) => {
                console.log(error);
              });
            actions.setSubmitting(false);
          }}
        >
          {(props: FormikProps<values>) => (
            <Form>
              <Stack spacing={6}>
                <Field name="username_login_res" validate={validateEmail}>
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={
                        form.errors.username_login_res &&
                        form.touched.username_login_res
                      }
                    >
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<EmailIcon color="gray.300" />}
                        />
                        <Input {...field} type="email" placeholder="Usuario" />
                      </InputGroup>
                      <Center>
                        <FormErrorMessage>
                          {form.errors.username_login_res}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Field name="password_login_res" validate={isEmpty}>
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={
                        form.errors.password_login_res &&
                        form.touched.password_login_res
                      }
                    >
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<LockIcon color="gray.300" />}
                        />
                        <Input
                          {...field}
                          type={showPwd ? "text" : "password"}
                          placeholder="Contraseña"
                        />
                        <InputRightElement>
                          <Button size="xs" onClick={handleClick}>
                            {showPwd ? <ViewOffIcon /> : <ViewIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <Center>
                        <FormErrorMessage>
                          {form.errors.password_login_res}
                        </FormErrorMessage>
                      </Center>
                    </FormControl>
                  )}
                </Field>
                <Center>
                  <Button
                    mt={4}
                    w={"45%"}
                    type="submit"
                    color="#fff"
                    backgroundColor="#000"
                    isLoading={props.isSubmitting}
                    _hover={{
                      color: "#fff",
                      backgroundColor: "#808080",
                    }}
                  >
                    ENTRAR
                  </Button>
                </Center>
              </Stack>
            </Form>
          )}
        </Formik>
        <LinkBox>
          <LinkOverlay href="/" color={"#808080"} fontWeight={"bold"}>
            <Text textAlign={"center"}>OLVIDE MI</Text>
            <Text textAlign={"center"}>CONTRASE&Ntilde;A</Text>
          </LinkOverlay>
        </LinkBox>
      </VStack>
    </Box>
  );
}
