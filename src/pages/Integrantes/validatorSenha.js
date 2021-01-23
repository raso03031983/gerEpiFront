import { validator } from "../../validator";

const fieldsValidation = {
  senha_atual: "required",
  senha_nova: "required",
  senha_conf: "required",
};

export default (form) => {
  const errors = validator(form, fieldsValidation);
  return errors;
};
