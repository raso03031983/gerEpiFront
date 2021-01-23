const defaultState = {
  ListGSE: [],
  GSE: {},
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
    case "FETCH_GSE_LISTA": {
      return {
        ...state,
        GSE: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_GSE_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListGSE: action.payload,
      };
    }

    case "FETCH_GSE_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_GSE_CREATE": {
      return {
        ...state,
        GSE: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_GSE_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        GSE: action.payload,
      };
    }

    case "FETCH_GSE_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_GSE_UPDATE": {
      return {
        ...state,
        GSE: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_GSE_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        GSE: action.payload,
      };
    }

    case "FETCH_GSE_UPDATE_REJECTED": {
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
        GSE: {},
      };
    }

    case "GSE_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "GSE_ERRORS_RESET": {
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
