const defaultState = {
  ListCargo: [],
  cargo: {},
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
    case "FETCH_CARGO_LISTA": {
      return {
        ...state,
        cargo: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CARGO_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListCargo: action.payload,
      };
    }

    case "FETCH_CARGO_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_CARGO_CREATE": {
      return {
        ...state,
        cargo: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CARGO_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        cargo: action.payload,
      };
    }

    case "FETCH_CARGO_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_CARGO_UPDATE": {
      return {
        ...state,
        cargo: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CARGO_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        cargo: action.payload,
      };
    }

    case "FETCH_CARGO_UPDATE_REJECTED": {
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
        cargo: {},
      };
    }

    case "CARGO_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "CARGO_ERRORS_RESET": {
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
