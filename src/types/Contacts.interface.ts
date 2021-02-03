export interface IContact {
  name: string;
  number: string | null | undefined;
  id: string | number;
  length: number;
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
    items: IContact[];
    filter: string;
    loading: boolean;
  };
}
