const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsFetchingUser = state => state.auth.isFetchingUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingUser,
};

export default authSelectors;
