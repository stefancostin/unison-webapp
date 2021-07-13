import { GeneralRoutes, DashboardRoutes } from 'router/routes';
import nodeHttpClient from 'services/nodes-api-client';
import { NODE_FORM__CLEAR_PROPERTIES, NODE_FORM__SET_PROPERTIES } from 'store/events';
import { AppDispatch, AppThunk, BaseAction, RootState } from 'store/types';
import { NodeForm } from 'types/nodes/NodeForm';
import { Node } from 'types/nodes/Node';
import { getNodeListAction } from './node-list-actions';

export const setNodeFormAction = (form: Partial<Node>): BaseAction<Partial<Node>> => ({
  type: NODE_FORM__SET_PROPERTIES,
  data: form,
});

export const clearNodeFormAction = (): BaseAction<Partial<Node>> => ({
  type: NODE_FORM__CLEAR_PROPERTIES,
  data: {},
});

export const addNodeFormAction = (node: Node): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const newNode: NodeForm = {
      name: node.name,
      description: node.description,
    };
    // await nodeHttpClient.addNode(newNode);
    console.log(node);
    window.history.pushState(null, ``, `/${GeneralRoutes.Dashboard}/${DashboardRoutes.Nodes}`);
  };
};

export const deleteNodeFormAction = (id: number): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    await nodeHttpClient.deleteNode(id);
    dispatch(getNodeListAction());
  };
};
