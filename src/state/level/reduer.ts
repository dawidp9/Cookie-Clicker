import { LevelActionTypes, LevelTypes } from './types';

export interface LevelModel {
    currentLevel: number;
    requirePoints: number;
}

export const initialState: LevelModel = {
    currentLevel: 1,
    requirePoints: 10,
};

const levelReducer = (state = initialState, action: LevelActionTypes) => {
    switch (action.type) {
        case LevelTypes.SET_NEXT_LEVEL: {
            return {
                ...state,
                currentLevel: state.currentLevel + 1,
                requirePoints: state.requirePoints * 2,
            };
        }
        default:
            return state;
    }
};

export default levelReducer;
