import { validator } from "../../validator";

const fieldsValidation = {
  nome_Fornecedor: "required",
  nome_Fantasia: "required",
  cnpj: "required",
};

export default (form) => {
  const errors = validator(form, fieldsValidation);
  return errors;
};
