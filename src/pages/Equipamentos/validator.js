import { validator } from "../../validator";

const fieldsValidation = {
  descricao_Equipamento: "required",
  iD_Familia: "required",
  iD_Divisao: "required",
  iD_Categoria: "required",
  status: "required",
  mobile: "required",
  equipamento_EmbMultipla: "required",
  iD_Grade: "required",
};

export default (form) => {
  const errors = validator(form, fieldsValidation);
  return errors;
};
