const defaultState = {
  ListGradeTamanho: [],
  gradeTamanho: {},
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
    case "FETCH_Grade_Tamanho_LISTA": {
      return {
        ...state,
        gradeTamanho: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_Grade_Tamanho_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListGradeTamanho: action.payload,
      };
    }

    case "FETCH_Grade_Tamanho_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_Grade_Tamanho_CREATE": {
      return {
        ...state,
        gradeTamanho: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_Grade_Tamanho_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        gradeTamanho: action.payload,
      };
    }

    case "FETCH_Grade_Tamanho_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_Grade_Tamanho_UPDATE": {
      return {
        ...state,
        gradeTamanho: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_Grade_Tamanho_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        gradeTamanho: action.payload,
      };
    }

    case "FETCH_Grade_Tamanho_UPDATE_REJECTED": {
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
        gradeTamanho: {},
      };
    }

    case "Grade_Tamanho_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "Grade_Tamanho_ERRORS_RESET": {
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
