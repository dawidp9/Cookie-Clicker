export enum StoreTypes {
    BUY_ROBOT = 'store/BUY_ROBOT',
    BUY_MULTIPLIER = 'store/BUY_MULTIPLIER',
    BUY_OREO = 'store/BUY_OREO',
}

export interface StoreBuyRobotAction {
    type: typeof StoreTypes.BUY_ROBOT;
}

export interface StoreBuyMultiplierAction {
    type: typeof StoreTypes.BUY_MULTIPLIER;
}

export interface StoreBuyOreoAction {
    type: typeof StoreTypes.BUY_OREO;
}

export type StoreActionTypes =
    | StoreBuyRobotAction
    | StoreBuyMultiplierAction
    | StoreBuyOreoAction;
