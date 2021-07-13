import { AppThunk } from 'store/types';

export type ActionsProps = {
  id: number;
  handleDelete: (id: number) => AppThunk;
};
