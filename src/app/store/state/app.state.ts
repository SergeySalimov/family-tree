import { initialeTreeState, ITreeState } from './tree-state.state';

export interface IAppState {
    treeState: ITreeState;
}

export const initialAppState: IAppState = {
    treeState: initialeTreeState,
};

export function getInitialState(): IAppState {
    return initialAppState;
}
