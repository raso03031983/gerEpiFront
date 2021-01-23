import { validator } from "../../validator";

const fieldsValidation = {
  nome_Integrante: "required",
  matricula: "required",
  iD_Local: "required",
  iD_Cargo: "required",
  iD_CentroCusto: "required",
  situacao: "required",
  tipo_MO: "required",
};

export default (form) => {
  const errors = validator(form, fieldsValidation);
  return errors;
};
