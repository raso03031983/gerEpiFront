import baseURL from "../configurations/instanceAxios";

export async function getAll(body) {
  return baseURL.post(`/Integrante/Get`, body);
}

export async function post(body) {
  return baseURL.post(`/Integrante/Post`, body);
}

export async function put(body) {
  return baseURL.put(`/Integrante/Put`, body);
}

export async function del(body) {
  return baseURL.delete(`/Integrante/Delete/${body.id}`);
}

export async function postSenha(body) {
  return baseURL.post(
    `/Integrante/PostSenha/${body.senha_nova}/${body.senha_atual}/${body.idUser}`
  );
}

export default {
  getAll,
  post,
  put,
  del,
  postSenha,
};
