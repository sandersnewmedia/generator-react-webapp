export const defaultState = {
  token: null,
  email: null,
  error: null
};

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
  case 'AUTH_RESPONSE':
    newState.token = action.payload.token;
    newState.email = action.payload.email;
    newState.error = null;
    return newState;
  case 'AUTH_ERROR':
    newState.token = null;
    newState.error = action.error;
    return newState;
  case 'AUTH_REQUEST':
    newState.token = null;
    newState.email = null;
    return newState;
  default:
    return state;
  }
};
