import service from "../../services/familia";

export function post(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_FAMILIA_CREATE" });
    try {
      const get = await service.post(body);
      dispatch({ type: "FETCH_FAMILIA_CREATE_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_FAMILIA_CREATE_REJECTED", payload: error });
    }
  };
}

export function put(idCliente, body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_FAMILIA_UPDATE" });
    try {
      const get = await service.put(idCliente, body);

      dispatch({ type: "FETCH_FAMILIA_UPDATE_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_FAMILIA_UPDATE_REJECTED", payload: error });
    }
  };
}

export function del(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_FAMILIA_DELETE" });
    try {
      console.log(body);
      const get = await service.del(body);

      dispatch({ type: "FETCH_FAMILIA_DELETE_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_FAMILIA_DELETE_REJECTED", payload: error });
    }
  };
}

export function getAll(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_FAMILIA_LISTA" });
    try {
      const get = await service.getAll(body);

      dispatch({ type: "FETCH_FAMILIA_LISTA_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_FAMILIA_LISTA_REJECTED", payload: error });
    }
  };
}

export default {
  getAll,
  post,
  put,
  del,
};
