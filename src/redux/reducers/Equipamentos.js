const defaultState = {
  ListEquipamentos: [],
  equipamentos: {},
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
    case "FETCH_EQUIPAMENTO_LISTA": {
      return {
        ...state,
        equipamentos: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_EQUIPAMENTO_LISTA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListEquipamentos: action.payload,
      };
    }

    case "FETCH_EQUIPAMENTO_LISTA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_EQUIPAMENTO_CREATE": {
      return {
        ...state,
        equipamentos: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_EQUIPAMENTO_CREATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        equipamentos: action.payload,
      };
    }

    case "FETCH_EQUIPAMENTO_CREATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_EQUIPAMENTO_UPDATE": {
      return {
        ...state,
        equipamentos: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_EQUIPAMENTO_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        equipamentos: action.payload,
      };
    }

    case "FETCH_EQUIPAMENTO_UPDATE_REJECTED": {
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
        equipamentos: {},
      };
    }

    case "EQUIPAMENTO_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "EQUIPAMENTO_ERRORS_RESET": {
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
