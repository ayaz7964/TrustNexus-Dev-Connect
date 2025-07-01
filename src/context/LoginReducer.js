export const initialState = {
  isAuthenticated: false,
  user: null,
  users: [],
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "SIGNUP":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
