export enum PointTypes {
    ADD_POINT_BY_CLICK = 'points/ADD_POINT_BY_CLICK',
    ADD_POINTS = 'points/ADD_POINTS',
    SUBTRACT_POINTS = 'points/SUBTRACT_POINTS',
    SET_MULTIPLIER = 'points/SET_MULTIPLIER',
}

export interface PointMultiplierAction {
    type: typeof PointTypes.SET_MULTIPLIER;
    payload: number;
}

export interface AddPointByClickAction {
    type: typeof PointTypes.ADD_POINT_BY_CLICK;
}

export interface AddPointsAction {
    type: typeof PointTypes.ADD_POINTS;
    points: number;
}

export interface SubtractPointsAction {
    type: typeof PointTypes.SUBTRACT_POINTS;
    points: number;
}

export type PointsActionType =
    | AddPointByClickAction
    | PointMultiplierAction
    | AddPointsAction
    | SubtractPointsAction;
