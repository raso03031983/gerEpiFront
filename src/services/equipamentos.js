import baseURL from "../configurations/instanceAxios";

export async function getAll(body) {
  return baseURL.post(`/Equipamento/Get/`, body);
}

export async function post(body) {
  return baseURL.post(`/Equipamento/Post`, body);
}

export async function put(body) {
  return baseURL.put(`/Equipamento/Put`, body);
}

export async function del(body) {
  return baseURL.delete(`/Equipamento/Delete/${body.id}`);
}

export default {
  getAll,
  post,
  put,
  del,
};
