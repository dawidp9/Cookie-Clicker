export enum LevelTypes {
    SET_NEXT_LEVEL = 'level/SET_NEXT_LEVEL',
}

export interface LevelUpAction {
    type: typeof LevelTypes.SET_NEXT_LEVEL;
}

export type LevelActionTypes = LevelUpAction;
