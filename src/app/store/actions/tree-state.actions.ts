import { Action } from '@ngrx/store';

export enum ETreeStateActions {
    InitTreeState = '[tree-state] Init',
    InitTreeStateSuccess = '[tree-state] Init success',
    GetLines = '[tree-state] Get lines',
}

export class InitTreeState implements Action {
    public readonly type = ETreeStateActions.InitTreeState;
}

export class InitTreeStateSuccess implements Action {
    public readonly type = ETreeStateActions.InitTreeStateSuccess;
}

export class GetLines {
    public readonly type = ETreeStateActions.GetLines;
    constructor(public payload: number) {}
}

export type TreeStateActions = InitTreeState | InitTreeStateSuccess | GetLines;
