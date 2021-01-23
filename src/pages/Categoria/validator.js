import { validator } from "../../validator";

const fieldsValidation = {
  descricao_Categoria: "required",
};

export default (form) => {
  const errors = validator(form, fieldsValidation);
  return errors;
};
