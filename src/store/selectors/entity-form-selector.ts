import { Entity } from 'types/entities/Entity';
import { RootState } from 'store/types';

export const getEntityFormSelector = (state: RootState): Entity => state.entityForm;
