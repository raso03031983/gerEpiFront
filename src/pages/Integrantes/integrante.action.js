import service from "../../services/integrante";

export function post(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_INTEGRANTE_CREATE" });
    try {
      const get = await service.post(body);
      dispatch({
        type: "FETCH_INTEGRANTE_CREATE_FULFILLED",
        payload: get.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_INTEGRANTE_CREATE_REJECTED", payload: error });
    }
  };
}

export function postSenha(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_INTEGRANTE_SENHA" });
    try {
      const get = await service.postSenha(body);
      dispatch({
        type: "FETCH_INTEGRANTE_SENHA_FULFILLED",
        payload: get.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_INTEGRANTE_SENHA_REJECTED", payload: error });
    }
  };
}

export function put(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_INTEGRANTE_UPDATE" });
    try {
      const get = await service.put(body);

      dispatch({
        type: "FETCH_INTEGRANTE_UPDATE_FULFILLED",
        payload: get.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_INTEGRANTE_UPDATE_REJECTED", payload: error });
    }
  };
}

export function del(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_INTEGRANTE_DELETE" });
    try {
      const get = await service.del(body);

      dispatch({
        type: "FETCH_INTEGRANTE_DELETE_FULFILLED",
        payload: get.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_INTEGRANTE_DELETE_REJECTED", payload: error });
    }
  };
}

export function getAll(body) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_INTEGRANTE_LISTA" });
    try {
      const get = await service.getAll(body);

      dispatch({ type: "FETCH_INTEGRANTE_LISTA_FULFILLED", payload: get.data });
    } catch (error) {
      dispatch({ type: "FETCH_INTEGRANTE_LISTA_REJECTED", payload: error });
    }
  };
}

export function reset() {
  return async (dispatch) => {
    dispatch({ type: "RESET" });
  };
}

export default {
  getAll,
  post,
  put,
  del,
  postSenha,
  reset,
};
