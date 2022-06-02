import Swal from "sweetalert2";

export const validateEmail = (value: string) => {
  let error;
  if (!value) {
    error = "Campo requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Usuario invalido";
  }
  return error;
};

export const isEmpty = (value: string) => {
  let error;
  if (value === "") {
    error = "Campo requerido";
  }
  return error;
};

export const isNumeric = (value: string) => {
  return /^-?\d+$/.test(value);
};

export const isPhoneValid = (value: string) => {
  let error = isEmpty(value);
  if (!isNumeric(value)) {
    error = "Teléfono invalido";
  }
  return error;
};

export const isValidNumber = (value: number) => {
  let error;
  if (value < 0) {
    error = "Número invalido";
  }
  return error;
};

export const isPermitted = (permission: boolean) => {
  if (permission) return false;
  Swal.fire({
    icon: "error",
    title: "No tiene los permisos necesarios.",
  });
  return true;
};
