import { Node } from 'types/nodes/Node';
import { RootState } from 'store/types';

export const getNodeFormSelector = (state: RootState): Node => state.nodeForm;
