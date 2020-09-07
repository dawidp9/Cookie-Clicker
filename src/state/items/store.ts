import { observable, action } from 'mobx';

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

class ItemsStore {
    @observable robot: IMultiItem = initRobot;
    @observable multiplier: IMultiItem = initMultiplier;
    @observable oreo: ISingleItem = initOreo;

    @action buyRobot = () => {
        this.robot = {
            name: 'Robot',
            price: this.robot.price * 2,
            minLevel: this.robot.minLevel * 2,
            owned: this.robot.owned + 1,
        };
    };

    @action buyMultiplier = () => {
        this.multiplier = {
            name: 'Multiplier',
            price: this.multiplier.price * 5,
            minLevel: this.multiplier.minLevel * 2,
            owned: this.multiplier.owned + 1,
        };
    };

    @action buyOreo = () => {
        this.oreo = {
            name: 'Oreo',
            price: this.oreo.price,
            minLevel: this.oreo.minLevel,
            owned: true,
        };
    };
}

export default new ItemsStore();
