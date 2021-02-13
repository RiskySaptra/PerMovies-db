export const initialState = {
  movieCollection: {},
  loading: true,
  error: false,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        movieCollection: action.payload.data,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
