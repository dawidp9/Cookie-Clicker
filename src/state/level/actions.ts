import { LevelActionTypes, LevelTypes } from './types';

export function setNextLevel(): LevelActionTypes {
    return {
        type: LevelTypes.SET_NEXT_LEVEL,
    };
}
