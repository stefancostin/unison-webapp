import { NodeTableData } from './../../types/nodes/NodeTableData';
import { Node } from 'types/nodes/Node';
import { RootState } from 'store/types';
import { isEmpty } from 'lodash';

export const getNodeListSelector = (state: RootState): Node[] => state.nodeList;

export const getNodeTableDataSelector = (state: RootState): NodeTableData[] => {
  if (isEmpty(state.nodeList)) {
    return [];
  }
  return state.nodeList.map(node => ({
    key: String(node.id),
    name: node.name,
    description: node.description,
    agents: node.agents,
  }));
};
