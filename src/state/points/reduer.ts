import { PointsActionType, PointTypes } from './types';

export interface PointsModel {
    allPoints: number;
    multiplier: number;
}

export const initialState: PointsModel = {
    allPoints: 0,
    multiplier: 1,
};

const pointsReducer = (state = initialState, action: PointsActionType) => {
    switch (action.type) {
        case PointTypes.ADD_POINT_BY_CLICK: {
            return {
                ...state,
                allPoints: state.allPoints + state.multiplier,
            };
        }
        case PointTypes.SET_MULTIPLIER: {
            return {
                ...state,
                multiplier: action.payload,
            };
        }
        case PointTypes.ADD_POINTS: {
            return {
                ...state,
                allPoints: state.allPoints + action.points,
            };
        }
        case PointTypes.SUBTRACT_POINTS: {
            return {
                ...state,
                allPoints: state.allPoints - action.points,
            };
        }
        default:
            return state;
    }
};

export default pointsReducer;
