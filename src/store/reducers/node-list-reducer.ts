import { NODE_LIST__SET_ITEMS } from 'store/events';
import { BaseAction } from 'store/types';
import { Node } from 'types/nodes/Node';

const nodeListReducer = (state: Node[] = [], action: BaseAction<Node[]>): Node[] => {
  switch (action.type) {
    case NODE_LIST__SET_ITEMS: {
      return [...action.data];
    }
    default:
      return state;
  }
};

export default nodeListReducer;
