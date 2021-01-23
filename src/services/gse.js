import axios from "axios";

export async function getAll(idCliente) {
  return axios.get(`https://gerepi.azurewebsites.net/v1/gse/${idCliente}`);
}

export async function getAllById(idCliente, id) {
  return axios.get(
    `https://gerepi.azurewebsites.net/v1/gse/GetById/${id}/${idCliente}`
  );
}

export async function post(body) {
  return axios.post(`https://gerepi.azurewebsites.net/v1/gse/, ${body}`);
}

export async function put(body, id) {
  return axios.put(`https://gerepi.azurewebsites.net/v1/gse/${id}/, ${body}`);
}

export async function del(body, id) {
  return axios.delete(
    `https://gerepi.azurewebsites.net/v1/gse/${id}/, ${body}`
  );
}

export default {
  getAll,
  getAllById,
  post,
  put,
  del,
};
