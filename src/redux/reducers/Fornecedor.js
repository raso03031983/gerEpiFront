const defaultState = {
  ListFornecedor: [],
  fornecedor: {},
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
    case "FETCH_FORNECEDOR_LISTA": {
      return {
        ...state,
        fornecedor: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_FORNECEDOR_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListFornecedor: action.payload,
      };
    }

    case "FETCH_FORNECEDOR_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_FORNECEDOR_CREATE": {
      return {
        ...state,
        fornecedor: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_FORNECEDOR_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        fornecedor: action.payload,
      };
    }

    case "FETCH_FORNECEDOR_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_FORNECEDOR_UPDATE": {
      return {
        ...state,
        fornecedor: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_FORNECEDOR_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        fornecedor: action.payload,
      };
    }

    case "FETCH_FORNECEDOR_UPDATE_REJECTED": {
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
        fornecedor: {},
      };
    }

    case "FORNECEDOR_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "FORNECEDOR_ERRORS_RESET": {
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
