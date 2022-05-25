import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { validateEmail, isEmpty } from "../../../validations/validations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { Field, Form, Formik, FormikProps } from "formik";
import {
  Box,
  Image,
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
  SimpleGrid,
  LinkBox,
  LinkOverlay,
  Flex,
  Spacer,
  Show,
  Hide,
} from "@chakra-ui/react";

import {
  EmailIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";

import Nurse from "../../../images/enfermera.png";
import NurseSub from "../../../images/enfermera-res.png";
import Fondo from "../../../images/fondo.png";
import { LoginResponsive } from "./LoginResponsive";
import { Helmet } from "react-helmet";
import User from "../../../models/User";
import UserService from "../../../services/UserService";
import { AuthContext, IAuthContext } from "../../../context/useAuth";

interface values {
  username_login: string;
  password_login: string;
}

export function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const handleClick = () => setShowPwd(!showPwd);

  const { currentUser, signin } = useContext(AuthContext) as IAuthContext;
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${Fondo})`;
    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, []);

  if (currentUser)
    return (
      <Navigate
        to={
          currentUser.rolId === Number(process.env.REACT_APP_ADMIN_ROL)
            ? "/admin"
            : "/tablero"
        }
      />
    );

  return (
    <>
      <Helmet>
        <title>Iniciar sesi&oacute;n - Pildora Raiz</title>
        <meta name="Login" content="Página de iniciar sesión" />
      </Helmet>
      <Hide breakpoint="(max-width: 1130px)">
        <Center>
          <SimpleGrid columns={2}>
            <Center>
              <Box
                bg={"#fff"}
                border="2px"
                borderStyle="dashed"
                borderRadius={"15px"}
                w={"85%"}
                p={"10%"}
              >
                <VStack spacing={30} align="stretch">
                  <Flex>
                    <Spacer></Spacer>
                    <a href="/">
                      <FontAwesomeIcon
                        icon={faHome}
                        color="#000"
                      ></FontAwesomeIcon>
                    </a>
                  </Flex>
                  <Text textAlign={"center"} fontSize={"4xl"}>
                    INICIAR SESIÓN
                  </Text>
                  <Formik
                    initialValues={{
                      username_login: "",
                      password_login: "",
                    }}
                    onSubmit={async (values, actions) => {
                      const userSignIn = new User();
                      userSignIn.username = values.username_login;
                      userSignIn.password = values.password_login;

                      UserService.login(userSignIn)
                        .then((response) => {
                          if (response.message) {
                            actions.setErrors({
                              password_login: response.message,
                            });
                          } else {
                            signin(userSignIn);
                            response.userFound.rolId ===
                            Number(process.env.REACT_APP_ADMIN_ROL)
                              ? navigate("/admin")
                              : navigate("/tablero");
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
                          <Field name="username_login" validate={validateEmail}>
                            {({ field, form }: any) => (
                              <FormControl
                                isInvalid={
                                  form.errors.username_login &&
                                  form.touched.username_login
                                }
                              >
                                <InputGroup>
                                  <InputLeftElement
                                    pointerEvents="none"
                                    children={<EmailIcon color="gray.300" />}
                                  />
                                  <Input
                                    {...field}
                                    type="email"
                                    placeholder="Usuario"
                                  />
                                </InputGroup>
                                <Center>
                                  <FormErrorMessage>
                                    <WarningTwoIcon marginRight={"4px"} />
                                    {form.errors.username_login}
                                  </FormErrorMessage>
                                </Center>
                              </FormControl>
                            )}
                          </Field>
                          <Field name="password_login" validate={isEmpty}>
                            {({ field, form }: any) => (
                              <FormControl
                                isInvalid={
                                  form.errors.password_login &&
                                  form.touched.password_login
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
                                    <WarningTwoIcon marginRight={"4px"} />
                                    {form.errors.password_login}
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
            </Center>

            <Hide breakpoint="(max-width: 1420px)">
              <Box>
                <Image src={Nurse} w={"100%"} h={"100vh"}></Image>
              </Box>
            </Hide>
            <Hide breakpoint="(max-width: 1130px)">
              <Show breakpoint="(max-width: 1420px)">
                <Box>
                  <Image src={NurseSub} w={"100%"} h={"100vh"}></Image>
                </Box>
              </Show>
            </Hide>
          </SimpleGrid>
        </Center>
      </Hide>
      <Show breakpoint="(max-width: 1130px)">
        <Center h={"100%"} minW={"450px"}>
          <LoginResponsive></LoginResponsive>
        </Center>
      </Show>
    </>
  );
}
