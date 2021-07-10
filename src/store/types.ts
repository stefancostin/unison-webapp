import { Action, ThunkAction } from '@reduxjs/toolkit';
import { store } from '.';

export interface BaseAction<T = null> extends Action<string> {
  readonly type: string;
  readonly data: T;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
