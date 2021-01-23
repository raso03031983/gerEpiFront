import baseURL from "../configurations/instanceAxios";

export async function getAll(body) {
  return baseURL.post(`Cargo/Get`, body);
}

export async function post(body) {
  return baseURL.post(`/Cargo/Post`, body);
}

export async function put(body) {
  return baseURL.put(`/Cargo/Put`, body);
}

export async function del(body) {
  return baseURL.delete(`/Cargo/Delete/${body.id}`);
}

export default {
  getAll,
  post,
  put,
  del,
};
