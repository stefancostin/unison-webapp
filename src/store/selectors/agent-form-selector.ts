import { RootState } from 'store/types';
import { Agent } from 'types/agents/Agent';

export const getAgentFormSelector = (state: RootState): Agent => state.agentForm;
