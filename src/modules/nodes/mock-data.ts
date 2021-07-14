import { NodeTableData } from 'types/nodes/NodeTableData';

export const mockNodes = [
  { id: 1, name: 'Node One', description: 'Node One Description' },
  { id: 2, name: 'Node Two', description: 'Node Two Description' },
];

export const mockTableData: NodeTableData[] = [
  {
    key: '1',
    name: 'Restaurant Node',
    description: 'Client restaurant data',
    agents: ['agent-1', 'agent-2'],
  },
  {
    key: '2',
    name: 'Take Away Node',
    description: 'Client infrastructure data',
    agents: ['agent-13', 'agent-14', 'agent-15'],
  },
  {
    key: '3',
    name: 'Distribution Node',
    description: 'Client distribution data',
    agents: ['agent-21', 'agent-22', 'agent-23'],
  },
];
