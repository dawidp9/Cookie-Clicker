import { PointsActionType, PointTypes } from './types';

export function addPointByClick(): PointsActionType {
    return {
        type: PointTypes.ADD_POINT_BY_CLICK,
    };
}

export function addPoints(points: number): PointsActionType {
    return {
        type: PointTypes.ADD_POINTS,
        points: points,
    };
}

export function subtractPoints(points: number): PointsActionType {
    return {
        type: PointTypes.SUBTRACT_POINTS,
        points: points,
    };
}

export function setPointMultiplier(multiplier: number): PointsActionType {
    return {
        type: PointTypes.SET_MULTIPLIER,
        payload: multiplier,
    };
}
