export const SET_CLUB = 'SET_CLUB';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const setClub = (state) => ({ type: SET_CLUB, state });
export const login = (state) => ({ type: LOGIN, state });
export const logOut = (state) => ({ type: LOGOUT, state });

export const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  club: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('mafiaUser', JSON.stringify(action.state.user));
      localStorage.setItem('mafiaToken', action.state.token);

      return {
        ...state,
        isAuthenticated: true,
        user: action.state.user,
        token: action.state.token,
      };
    case LOGOUT:
      localStorage.clear();

      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SET_CLUB:
      localStorage.clear();

      return {
        ...state,
        club: action.state,
      };
    default:
      return state;
  }
};
