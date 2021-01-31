const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user?.name;
const getIsFetchingUser = state => state.auth.isFetchingUser;
const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingUser,
  getError,
};

export default authSelectors;
