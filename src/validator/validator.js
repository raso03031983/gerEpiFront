/**
 * Módulo de validação de formulários que recebe um objeto contendo as funnções de validação
 * e retorna um objeto com os erros encontrados
 *
 * @param {Object} form objeto com campos do formulário a ser validado
 * @param {Object} fieldsValidation objeto com as funções de validação para cada campo do formulário
 * @example
 * // returns { hasError: false, fields: {} }
 * const fieldsValidation = {
 *     nome: ({ nome }) => {
 *         const msg = null;
 *         if (!numTDP) msg = "Campo obrigatório";
 *         return msg;
 *     },
 *     idade: 'required',
 * }
 * validations({ nome = 'Bino', idade: 28 }, fieldsValidation);
 * @example
 * // returns
 * // {
 * //   hasError: true,
 * //   fields: {
 * //     nome: 'O campo nome deve conter mais de 3 caracteres',
 * //     idade: 'O campo idade é obrigatório',
 * //   }
 * // }
 * const fieldsValidation = {
 *     nome: ({ nome }) => {
 *         const msg = null;
 *         if (!numTDP) msg = 'O campo nome deve conter mais de 3 caracteres';
 *         return msg;
 *     },
 *     idade: 'required',
 * }
 * validations({ nome = 'J3' }, fieldsValidation);
 * @returns {Object} Retorna um objeto com errors de validação.
 */
function validations(
  form = {},
  fieldsValidation = {},
  messageTemplate = (field) => "Campo obrigatório"
) {
  const errors = {
    hasError: false,
    fields: {},
  };

  Object.keys(fieldsValidation).forEach((field) => {
    if (typeof fieldsValidation[field] === "function") {
      try {
        const message = fieldsValidation[field](form);
        if (message) errors.fields[field] = message;
      } catch (error) {
        console.error(`Erro ao validar o campo ${field}`, error);
      }
    } else if (fieldsValidation[field] === "required") {
      let message = null;
      if (Array.isArray(form[field])) {
        if (form[field].length === 0) message = messageTemplate(field);
      }
      if (!form[field]) message = messageTemplate(field);
      if (message) errors.fields[field] = message;
    }
  });

  if (Object.keys(errors.fields).length > 0) errors.hasError = true;

  return errors;
}

export default validations;
