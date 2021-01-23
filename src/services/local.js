import baseURL from "../configurations/instanceAxios";

export async function getAll(body) {
  return baseURL.post(`Local/Get`, body);
}

export async function post(body) {
  return baseURL.post(`/Local/Post`, body);
}

export async function put(body) {
  return baseURL.put(`/Local/Put`, body);
}

export async function del(body) {
  return baseURL.delete(`/Local/Delete/${body.id}`);
}

export default {
  getAll,
  post,
  put,
  del,
};
