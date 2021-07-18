import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './types';
import agentFormReducer from './reducers/agent-form-reducer';
import agentListReducer from './reducers/agent-list-reducer';
import entityFormReducer from './reducers/entity-form-reducer';
import entityListReducer from './reducers/entity-list-reducer';
import nodeFormReducer from './reducers/node-form-reducer';
import nodeListReducer from './reducers/node-list-reducer';

export const store = configureStore({
  reducer: combineReducers({
    agentForm: agentFormReducer,
    agentList: agentListReducer,
    entityForm: entityFormReducer,
    entityList: entityListReducer,
    nodeForm: nodeFormReducer,
    nodeList: nodeListReducer,
  }),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
