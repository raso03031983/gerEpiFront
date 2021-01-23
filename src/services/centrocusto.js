import baseURL from "../configurations/instanceAxios";

export async function getAll(body) {
  return baseURL.post(`Centro_Custo/Get`, body);
}

export async function post(body) {
  return baseURL.post(`/Centro_Custo/Post`, body);
}

export async function put(body) {
  return baseURL.put(`/Centro_Custo/Put`, body);
}

export async function del(body) {
  return baseURL.delete(`/Centro_Custo/Delete/${body.id}`);
}

export default {
  getAll,
  post,
  put,
  del,
};
