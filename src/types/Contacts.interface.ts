export interface IContact {
  name: string;
  number: string | null | undefined;
  id: string | number;
  length: number;
}

export interface IUser {
  name: string;
  email: string;
}

export interface IToken {
  token: string | null;
}

export interface IAuth {
  user: { name: string | null; email: string | null };
  token: null | string;
  isLoggedIn: boolean;
  isFetchingUser: boolean;
  error: any;
}

export interface IState {
  auth: IAuth;
  contacts: {
    error: any;
    items: IContact[];
    filter: string;
    loading: boolean;
  };
}

export interface Data {
  token: string;
  user: IUser;
}
