const defaultState = {
  ListCentroCusto: [],
  centro_custo: {},
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
    case "FETCH_CENTRO_CUSTO_LISTA": {
      return {
        ...state,
        centro_custo: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CENTRO_CUSTO_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListCentroCusto: action.payload,
      };
    }

    case "FETCH_CENTRO_CUSTO_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_CENTRO_CUSTO_CREATE": {
      return {
        ...state,
        centro_custo: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CENTRO_CUSTO_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        centro_custo: action.payload,
      };
    }

    case "FETCH_CENTRO_CUSTO_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_CENTRO_CUSTO_UPDATE": {
      return {
        ...state,
        centro_custo: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CENTRO_CUSTO_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        centro_custo: action.payload,
      };
    }

    case "FETCH_CENTRO_CUSTO_UPDATE_REJECTED": {
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
        centro_custo: {},
      };
    }

    case "CENTRO_CUSTO_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "CENTRO_CUSTO_ERRORS_RESET": {
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
