import { Account } from './../../types/accounts/Account';
import { RootState } from 'store/types';

export const getAccountSelector = (state: RootState): Account => state.account;
