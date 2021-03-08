export const initialeTreeState = null;

export interface ITreeState {
    lines?: Lines[];
    currentLine?: number;
    // todo on creation, fill after work on it
    mapOfTree?: any;
    ids?: string[];
}

export interface Lines {
    lines: Cell[];
}

export interface Cell {
    id: string | null;
    info: Info;
    parent: Parent;
    marriage: Marriage;
    ex: Marriage[];
}

export interface Marriage {
    partner: Info | null;
    children?: Info[];
}

export interface Parent {
    mother: Info | null;
    father: Info | null;
}

export interface Info {
    name: string | 'unknown';
    surName: string | 'unknown';
    patronymic?: string | null | 'unknown';
    birth: Date | null | 'unknown';
    death: Date | null | 'unknown';
}
