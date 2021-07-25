import { GeneralRoutes, DashboardRoutes } from './../../router/routes';
import agentHttpClient from 'http/account-api-client';
import { AuthTokenKey, AccountKey } from './../../types/local-storage/LocalStorage';
import { AuthResponse } from './../../types/accounts/AuthResponse';
import { AuthRequest } from './../../types/accounts/AuthRequest';
import { AppDispatch, AppThunk, BaseAction, RootState } from 'store/types';
import { Account } from './../../types/accounts/Account';
import { ACCOUNTS__SET_PROPERTIES } from './../events';
import { history } from 'router/Router';

export const setAccountAction = (account: Partial<Account>): BaseAction<Partial<Account>> => ({
  type: ACCOUNTS__SET_PROPERTIES,
  data: account,
});

export const authenticateAccountAction = (credentials: AuthRequest): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const response: AuthResponse = await agentHttpClient.authenticate(credentials);
    const account: Account = {
      id: response.id,
      firstName: response.firstName,
      lastName: response.lastName,
      username: response.username,
    };

    window.localStorage.setItem(AuthTokenKey, response.token);
    window.localStorage.setItem(AccountKey, JSON.stringify(account));

    history.push(`/${GeneralRoutes.Dashboard}/${DashboardRoutes.Logs}`);
  };
};
