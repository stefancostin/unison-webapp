import { NODE_FORM__CLEAR_PROPERTIES, NODE_FORM__SET_PROPERTIES } from 'store/events';
import { BaseAction } from 'store/types';
import { Node } from 'types/nodes/Node';

const initialState: Node = {
  id: null,
  name: null,
  description: null,
  agents: null,
};

const nodeFormReducer = (state: Node = initialState, action: BaseAction<Node>): Node => {
  switch (action.type) {
    case NODE_FORM__SET_PROPERTIES: {
      return { ...state, ...action.data };
    }
    case NODE_FORM__CLEAR_PROPERTIES: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default nodeFormReducer;
