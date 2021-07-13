import { Node } from 'types/nodes/Node';
import { RootState } from 'store/types';

export const getNodeListSelector = (state: RootState): Node[] => state.nodeList;
