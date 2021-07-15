import { Agent } from 'types/agents/Agent';
import { AGENT_FORM__CLEAR_PROPERTIES, AGENT_FORM__SET_PROPERTIES } from 'store/events';
import { BaseAction } from 'store/types';

const initialState: Agent = {
  id: null,
  instanceId: null,
  node: null,
};

const agentFormReducer = (state: Agent = initialState, action: BaseAction<Agent>): Agent => {
  switch (action.type) {
    case AGENT_FORM__SET_PROPERTIES: {
      return { ...state, ...action.data };
    }
    case AGENT_FORM__CLEAR_PROPERTIES: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default agentFormReducer;
