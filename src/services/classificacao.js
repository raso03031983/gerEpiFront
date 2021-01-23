import baseURL from "../configurations/instanceAxios";

export async function getAll(body) {
  return baseURL.post(`/Classificacao/Get`, body);
}

export async function post(body) {
  return baseURL.post(`/Classificacao/Post`, body);
}

export async function put(body) {
  return baseURL.put(`/Classificacao/Put`, body);
}

export async function del(body) {
  return baseURL.delete(`/Classificacao/Delete/${body.id}`);
}

export default {
  getAll,
  post,
  put,
  del,
};
