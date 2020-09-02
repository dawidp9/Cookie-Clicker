import { StoreActionTypes, StoreTypes } from './types';

export function buyRobot(): StoreActionTypes {
    return {
        type: StoreTypes.BUY_ROBOT,
    };
}

export function buyMultiplier(): StoreActionTypes {
    return {
        type: StoreTypes.BUY_MULTIPLIER,
    };
}

export function buyOreo(): StoreActionTypes {
    return {
        type: StoreTypes.BUY_OREO,
    };
}
