const defaultState = {
  ListClassificacao: [],
  classificacao: {},
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
    case "FETCH_CLASSIFICACAO_LISTA": {
      return {
        ...state,
        classificacao: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CLASSIFICACAO_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListClassificacao: action.payload,
      };
    }

    case "FETCH_CLASSIFICACAO_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_CLASSIFICACAO_CREATE": {
      return {
        ...state,
        classificacao: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CLASSIFICACAO_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        classificacao: action.payload,
      };
    }

    case "FETCH_CLASSIFICACAO_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_CLASSIFICACAO_UPDATE": {
      return {
        ...state,
        classificacao: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CLASSIFICACAO_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        classificacao: action.payload,
      };
    }

    case "FETCH_CLASSIFICACAO_UPDATE_REJECTED": {
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
        classificacao: {},
      };
    }

    case "CLASSIFICACAO_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "CLASSIFICACAO_ERRORS_RESET": {
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
