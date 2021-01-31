const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user?.name;
const getIsFetchingUser = state => state.auth.isFetchingUser;
const getError = state => state.auth.error;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingUser,
  getError,
  getToken,
};

export default authSelectors;
