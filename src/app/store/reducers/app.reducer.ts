import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { treeStateReducer } from './tree-state.reducer';
import { IAppState } from '../state/app.state';

export const appReducer: ActionReducerMap<IAppState, any> = {
    treeState: treeStateReducer,
};
