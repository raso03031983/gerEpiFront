const defaultState = {
  ListIntegrante: [],
  integrante: {},
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
    case "FETCH_INTEGRANTE_LISTA": {
      return {
        ...state,
        integrante: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_INTEGRANTE_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListIntegrante: action.payload,
      };
    }

    case "FETCH_INTEGRANTE_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_INTEGRANTE_CREATE": {
      return {
        ...state,
        integrante: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_INTEGRANTE_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        integrante: action.payload,
      };
    }

    case "FETCH_INTEGRANTE_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_INTEGRANTE_SENHA": {
      return {
        ...state,
        integrante: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_INTEGRANTE_SENHA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        integrante: action.payload,
      };
    }

    case "FETCH_INTEGRANTE_SENHA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_INTEGRANTE_UPDATE": {
      return {
        ...state,
        integrante: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_INTEGRANTE_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        integrante: action.payload,
      };
    }

    case "FETCH_INTEGRANTE_UPDATE_REJECTED": {
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
        integrante: {},
        error: null,
      };
    }

    case "INTEGRANTE_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "INTEGRANTE_ERRORS_RESET": {
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
