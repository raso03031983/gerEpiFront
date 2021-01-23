import baseURL from "../configurations/instanceAxios";

export async function getAll(body) {
  return baseURL.post(`/Familia/Get`, body);
}

export async function post(body) {
  return baseURL.post(`/Familia/Post`, body);
}

export async function put(body) {
  return baseURL.put(`/Familia/Put`, body);
}

export async function del(body) {
  return baseURL.delete(`/Familia/Delete/${body.id}`);
}

export default {
  getAll,
  post,
  put,
  del,
};
