import { IState } from 'types/Contacts.interface';

const getIsLoggedIn = (state: IState) => state.auth.isLoggedIn as boolean;
const getUsername = (state: IState) => state.auth.user?.name as string | null;
const getIsFetchingUser = (state: IState) =>
  state.auth.isFetchingUser as boolean;
const getError = (state: IState) => state.auth.error;
const getToken = (state: IState) => state.auth.token as string | null;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingUser,
  getError,
  getToken,
};

export default authSelectors;
