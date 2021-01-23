import { validator } from "../../validator";

const fieldsValidation = {
  iD_Categoria: "required",
  iD_Divisao: "required",
  iD_Familia: "required",
};

export default (form) => {
  const errors = validator(form, fieldsValidation);
  return errors;
};
