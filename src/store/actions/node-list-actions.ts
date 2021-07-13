import nodeHttpClient from 'services/nodes-api-client';
import { NODE_LIST__SET_ITEMS } from 'store/events';
import { AppDispatch, AppThunk, BaseAction, RootState } from 'store/types';
import { Node } from 'types/nodes/Node';

export const setNodeListAction = (list: Partial<Node[]>): BaseAction<Partial<Node[]>> => ({
  type: NODE_LIST__SET_ITEMS,
  data: list,
});

export const getNodeListAction = (): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const nodes = await nodeHttpClient.getNodes();
    dispatch(setNodeListAction(nodes));
  };
};
