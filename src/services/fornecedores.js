import baseURL from "../configurations/instanceAxios";

export async function getAll(body) {
  return baseURL.post(`/Fornecedor/Get`, body);
}

export async function post(body) {
  return baseURL.post(`/Fornecedor/Post`, body);
}

export async function put(body) {
  return baseURL.put(`/Fornecedor/Put`, body);
}

export async function del(body) {
  return baseURL.delete(`/Fornecedor/Delete/${body.id}`);
}

export default {
  getAll,
  post,
  put,
  del,
};
