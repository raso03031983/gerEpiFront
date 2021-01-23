import baseURL from "../configurations/instanceAxios";

export async function getAll(body) {
  return baseURL.post(`Divisao/Get`, body);
}

export async function post(body) {
  return baseURL.post(`/Divisao/Post`, body);
}

export async function put(body) {
  return baseURL.put(`/Divisao/Put`, body);
}

export async function del(body) {
  return baseURL.delete(`/Divisao/Delete/${body.id}`);
}

export default {
  getAll,
  post,
  put,
  del,
};
