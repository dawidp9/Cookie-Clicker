import { StoreActionTypes, StoreTypes } from './types';

export interface StoreModel {
    robot: IMultiItem;
    multiplier: IMultiItem;
    oreo: ISingleItem;
}

export interface IMultiItem {
    name: string;
    price: number;
    minLevel: number;
    owned: number;
}

export interface ISingleItem {
    name: string;
    price: number;
    minLevel: number;
    owned: boolean;
}

const initRobot: IMultiItem = {
    name: 'Robot',
    price: 20,
    minLevel: 2,
    owned: 0,
};

const initMultiplier: IMultiItem = {
    name: 'Multiplier',
    price: 20,
    minLevel: 2,
    owned: 1,
};

const initOreo: ISingleItem = {
    name: 'Oreo',
    price: 200,
    minLevel: 3,
    owned: false,
};

export const initialState: StoreModel = {
    robot: initRobot,
    multiplier: initMultiplier,
    oreo: initOreo,
};

const storeReducer = (state = initialState, action: StoreActionTypes) => {
    switch (action.type) {
        case StoreTypes.BUY_ROBOT: {
            return {
                ...state,
                robot: {
                    name: state.robot.name,
                    price: state.robot.price * 2,
                    minLevel: state.robot.minLevel * 2,
                    owned: state.robot.owned + 1,
                },
            };
        }
        case StoreTypes.BUY_MULTIPLIER: {
            return {
                ...state,
                multiplier: {
                    name: state.multiplier.name,
                    price: state.multiplier.price * 5,
                    minLevel: state.multiplier.minLevel * 2,
                    owned: state.multiplier.owned + 1,
                },
            };
        }
        case StoreTypes.BUY_OREO: {
            return {
                ...state,
                oreo: {
                    name: state.oreo.name,
                    price: state.oreo.price,
                    minLevel: state.oreo.minLevel,
                    owned: true,
                },
            };
        }
        default:
            return state;
    }
};

export default storeReducer;
