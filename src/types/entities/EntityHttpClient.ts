import { EntitySaveRequest } from './EntitySaveRequest';
import { Entity } from './Entity';

export interface EntityHttpClient {
  getEntity: (id: number) => Promise<Entity>;
  getEntities: () => Promise<Entity[]>;
  addEntity: (Entity: EntitySaveRequest) => Promise<void>;
  updateEntity: (Entity: EntitySaveRequest) => Promise<void>;
  deleteEntity: (id: number) => Promise<void>;
}
