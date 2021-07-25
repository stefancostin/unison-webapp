import { Account } from './../../types/accounts/Account';
import { ACCOUNTS__SET_PROPERTIES } from 'store/events';
import { BaseAction } from 'store/types';

const initialState: Account = {
  id: null,
  firstName: null,
  lastName: null,
  username: null,
};

const accountReducer = (state: Account = initialState, action: BaseAction<Account>): Account => {
  switch (action.type) {
    case ACCOUNTS__SET_PROPERTIES: {
      return { ...state, ...action.data };
    }
    default:
      return state;
  }
};

export default accountReducer;
