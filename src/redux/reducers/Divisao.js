const defaultState = {
  ListDivisao: [],
  divisao: {},
  nwstate: "",
  error: null,
  formError: {
    hasError: false,
    fields: {},
  },
  formOptions: {
    perfis: [],
  },
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_DIVISAO_LISTA": {
      return {
        ...state,
        familia: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_DIVISAO_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListDivisao: action.payload,
      };
    }

    case "FETCH_DIVISAO_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_DIVISAO_CREATE": {
      return {
        ...state,
        divisao: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_DIVISAO_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        divisao: action.payload,
      };
    }

    case "FETCH_DIVISAO_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_DIVISAO_UPDATE": {
      return {
        ...state,
        divisao: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_DIVISAO_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        divisao: action.payload,
      };
    }

    case "FETCH_DIVISAO_UPDATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_DONE": {
      return {
        ...state,
        nwstate: "DONE",
      };
    }

    case "RESET": {
      return {
        ...state,
        familia: {},
      };
    }

    case "DIVISAO_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "DIVISAO_ERRORS_RESET": {
      return {
        ...state,
        nwstate: "ERRORS_RESET",
        formError: defaultState.formError,
      };
    }

    default: {
      return state;
    }
  }
}
