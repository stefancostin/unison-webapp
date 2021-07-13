import nodeHttpClient from 'services/nodes-api-client';
import sendNotification from 'services/notification-service';
import { history } from 'router/Router';
import { GeneralRoutes, DashboardRoutes } from 'router/routes';
import { NODE_FORM__CLEAR_PROPERTIES, NODE_FORM__SET_PROPERTIES } from 'store/events';
import { AppDispatch, AppThunk, BaseAction, RootState } from 'store/types';
import { NodeSaveRequest } from 'types/nodes/NodeSaveRequest';
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
    const newNode: NodeSaveRequest = {
      name: node.name,
      description: node.description,
    };

    // await nodeHttpClient.addNode(newNode);

    console.log(node);

    sendNotification('Operation Successful', 'Node has been added successfully');
    history.push(`/${GeneralRoutes.Dashboard}/${DashboardRoutes.Nodes}`);
  };
};

export const deleteNodeFormAction = (id: number): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    await nodeHttpClient.deleteNode(id);
    dispatch(getNodeListAction());
  };
};
