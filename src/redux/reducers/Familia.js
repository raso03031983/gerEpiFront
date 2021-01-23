const defaultState = {
  ListFamilia: [],
  familia: {},
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
    case "FETCH_FAMILIA_LISTA": {
      return {
        ...state,
        familia: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_FAMILIA_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListFamilia: action.payload,
      };
    }

    case "FETCH_FAMILIA_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_FAMILIA_CREATE": {
      return {
        ...state,
        familia: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_FAMILIA_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        familia: action.payload,
      };
    }

    case "FETCH_FAMILIA_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_FAMILIA_UPDATE": {
      return {
        ...state,
        familia: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_FAMILIA_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        familia: action.payload,
      };
    }

    case "FETCH_FAMILIA_UPDATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_FAMILIA_DELETE": {
      return {
        ...state,
        familia: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_FAMILIA_DELETE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        familia: action.payload,
      };
    }

    case "FETCH_FAMILIA_DELETE_REJECTED": {
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

    case "FAMILIA_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "FAMILIA_ERRORS_RESET": {
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
