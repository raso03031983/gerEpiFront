import { validator } from "../../validator";

const fieldsValidation = {
  descricao_Divisao: "required",
};

export default (form) => {
  const errors = validator(form, fieldsValidation);
  return errors;
};
