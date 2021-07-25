import { Account } from './Account';

export interface AccountService {
  getAccount: () => Account;
  logout: () => void;
}
