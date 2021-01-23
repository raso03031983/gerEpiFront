import service from "../../services/fornecedores";

export function post(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_FORNECEDOR_CREATE" });
    try {
      const get = await service.post(body);
      dispatch({
        type: "FETCH_FORNECEDOR_CREATE_FULFILLED",
        payload: get.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_FORNECEDOR_CREATE_REJECTED", payload: error });
    }
  };
}

export function put(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_FORNECEDOR_UPDATE" });
    try {
      const get = await service.put(body);

      dispatch({
        type: "FETCH_FORNECEDOR_UPDATE_FULFILLED",
        payload: get.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_FORNECEDOR_UPDATE_REJECTED", payload: error });
    }
  };
}

export function del(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_FORNECEDOR_DELETE" });
    try {
      const get = await service.del(body);

      dispatch({
        type: "FETCH_FORNECEDOR_DELETE_FULFILLED",
        payload: get.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_FORNECEDOR_DELETE_REJECTED", payload: error });
    }
  };
}

export function getAll(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_FORNECEDOR_LISTA" });
    try {
      const get = await service.getAll(body);
      dispatch({ type: "FETCH_FORNECEDOR_LISTA_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_FORNECEDOR_LISTA_REJECTED", payload: error });
    }
  };
}

export default {
  getAll,
  post,
  put,
  del,
};
