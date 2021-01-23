import baseURL from "../configurations/instanceAxios";

export async function getAll(body) {
  return baseURL.post(`Categoria/Get`, body);
}

export async function post(body) {
  return baseURL.post(`/Categoria/Post`, body);
}

export async function put(body) {
  return baseURL.put(`/Categoria/Put`, body);
}

export async function del(body) {
  console.log(body.id);
  return baseURL.delete(`/Categoria/Delete/${body.id}`);
}

export default {
  getAll,
  post,
  put,
  del,
};
