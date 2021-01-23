import baseURL from "../configurations/instanceAxios";

export async function getAll(body) {
  return baseURL.get(
    `/Grade_Tamanho/Get/${body.id_divisao}/${body.id_cliente}`
  );
}

export async function post(body) {
  return baseURL.post(`/Grade_Tamanho/Post`, body);
}

export async function put(body) {
  return baseURL.put(`/Grade_Tamanho/Put`, body);
}

export async function del(body) {
  return baseURL.delete(`/Grade_Tamanho/Delete/${body.id}`);
}

export default {
  getAll,
  post,
  put,
  del,
};
