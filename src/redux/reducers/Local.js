const defaultState = {
  ListLocal: [],
  local: {},
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
    case "FETCH_LOCAL_LISTA": {
      return {
        ...state,
        local: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_LOCAL_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListLocal: action.payload,
      };
    }

    case "FETCH_LOCAL_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_LOCAL_CREATE": {
      return {
        ...state,
        local: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_LOCAL_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        local: action.payload,
      };
    }

    case "FETCH_LOCAL_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_LOCAL_UPDATE": {
      return {
        ...state,
        local: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_LOCAL_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        local: action.payload,
      };
    }

    case "FETCH_LOCAL_UPDATE_REJECTED": {
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
        local: {},
      };
    }

    case "LOCAL_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "LOCAL_ERRORS_RESET": {
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
