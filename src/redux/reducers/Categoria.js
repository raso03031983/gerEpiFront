const defaultState = {
  ListCategoria: [],
  categoria: {},
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
    case "FETCH_CATEGORIA_LISTA": {
      return {
        ...state,
        categoria: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CATEGORIA_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListCategoria: action.payload,
      };
    }

    case "FETCH_CATEGORIA_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_CATEGORIA_CREATE": {
      return {
        ...state,
        categoria: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CATEGORIA_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        categoria: action.payload,
      };
    }

    case "FETCH_CATEGORIA_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_CATEGORIA_UPDATE": {
      return {
        ...state,
        categoria: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CATEGORIA_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        categoria: action.payload,
      };
    }

    case "FETCH_CATEGORIA_UPDATE_REJECTED": {
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
        categoria: {},
      };
    }

    case "CATEGORIA_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "CATEGORIA_ERRORS_RESET": {
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
