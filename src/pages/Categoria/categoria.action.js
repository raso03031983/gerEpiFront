import service from "../../services/categoria";

export function post(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CATEGORIA_CREATE" });
    try {
      const get = await service.post(body);
      dispatch({ type: "FETCH_CATEGORIA_CREATE_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_CATEGORIA_CREATE_REJECTED", payload: error });
    }
  };
}

export function put(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CATEGORIA_UPDATE" });
    try {
      const get = await service.put(body);

      dispatch({ type: "FETCH_CATEGORIA_UPDATE_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_CATEGORIA_UPDATE_REJECTED", payload: error });
    }
  };
}

export function del(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CATEGORIA_DELETE" });
    try {
      console.log(body);
      const get = await service.del(body);

      dispatch({ type: "FETCH_CATEGORIA_DELETE_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_CATEGORIA_DELETE_REJECTED", payload: error });
    }
  };
}

export function getAll(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CATEGORIA_LISTA" });
    try {
      const get = await service.getAll(body);

      dispatch({ type: "FETCH_CATEGORIA_LISTA_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_CATEGORIA_LISTA_REJECTED", payload: error });
    }
  };
}

export default {
  getAll,
  post,
  put,
  del,
};
