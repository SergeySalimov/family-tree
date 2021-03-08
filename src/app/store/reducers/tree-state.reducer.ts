import { initialeTreeState, ITreeState } from '../state/tree-state.state';
import { ETreeStateActions, TreeStateActions } from '../actions/tree-state.actions';

export const treeStateReducer = (
    state: ITreeState | null = initialeTreeState,
    action: TreeStateActions,
): ITreeState => {
    switch (action.type) {
        case ETreeStateActions.InitTreeState:
            return state;
        case ETreeStateActions.GetLines:
            return {
                ...state,
                currentLine: action.payload,
            };
        default:
            return state;
    }
}
