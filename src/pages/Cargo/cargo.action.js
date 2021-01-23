import service from "../../services/cargo";

export function post(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CARGO_CREATE" });
    try {
      const get = await service.post(body);
      dispatch({ type: "FETCH_CARGO_CREATE_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_CARGO_CREATE_REJECTED", payload: error });
    }
  };
}

export function put(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CARGO_UPDATE" });
    try {
      const get = await service.put(body);

      dispatch({ type: "FETCH_CARGO_UPDATE_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_CARGO_UPDATE_REJECTED", payload: error });
    }
  };
}

export function del(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CARGO_DELETE" });
    try {
      const get = await service.del(body);

      dispatch({ type: "FETCH_CARGO_DELETE_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_CARGO_DELETE_REJECTED", payload: error });
    }
  };
}

export function getAll(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CARGO_LISTA" });
    try {
      const get = await service.getAll(body);

      dispatch({ type: "FETCH_CARGO_LISTA_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_CARGO_LISTA_REJECTED", payload: error });
    }
  };
}

export default {
  getAll,
  post,
  put,
  del,
};
