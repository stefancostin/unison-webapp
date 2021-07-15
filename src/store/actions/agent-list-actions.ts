import nodeHttpClient from 'services/nodes-api-client';
import { AGENT_LIST__SET_ITEMS } from 'store/events';
import { AppDispatch, AppThunk, BaseAction, RootState } from 'store/types';
import { Node } from 'types/nodes/Node';

export const setAgentListAction = (list: Partial<Node[]>): BaseAction<Partial<Node[]>> => ({
  type: AGENT_LIST__SET_ITEMS,
  data: list,
});

export const getAgentListAction = (): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const nodes = await nodeHttpClient.getNodes();
    dispatch(setAgentListAction(nodes));
  };
};
