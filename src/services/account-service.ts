import { Account } from 'types/accounts/Account';
import { AccountKey, AuthTokenKey } from 'types/local-storage/LocalStorage';
import { AccountService } from 'types/accounts/AccountService';

const getAccount = (): Account => {
  const account = window.localStorage.getItem(AccountKey);
  try {
    return JSON.parse(account);
  } catch (err) {
    return null;
  }
};

const logout = (): void => {
  window.localStorage.removeItem(AccountKey);
  window.localStorage.removeItem(AuthTokenKey);
};

const accountService: AccountService = {
  getAccount,
  logout,
};

export default accountService;
