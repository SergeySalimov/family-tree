import { IAppState } from '../state/app.state';
import { ITreeState } from '../state/tree-state.state';
import { createSelector } from '@ngrx/store';

const selectTreeState = (state: IAppState): ITreeState => state.treeState;

export const selectLines = createSelector(
    selectTreeState,
    (state: ITreeState) => state.lines,
);
