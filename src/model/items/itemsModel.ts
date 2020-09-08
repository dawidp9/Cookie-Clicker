import { types } from 'mobx-state-tree';
import OreoModel from './oreoModel';
import MultiplierModel from './multiplierModel';
import RobotModel from './robotModel';

const ItemsModel = types
    .model('ItemsModel', {
        robot: RobotModel,
        multiplier: MultiplierModel,
        oreo: OreoModel,
    })
    .actions((self) => ({
        buyRobot() {
            self.robot = {
                name: 'Robot',
                price: self.robot.price * 2,
                minLevel: self.robot.minLevel * 2,
                owned: self.robot.owned + 1,
            };
        },
        buyMultiplier() {
            self.multiplier = {
                name: 'Multiplier',
                price: self.multiplier.price * 5,
                minLevel: self.multiplier.minLevel * 2,
                owned: self.multiplier.owned + 1,
            };
        },
        buyOreo() {
            self.oreo = {
                name: 'Oreo',
                price: self.oreo.price,
                minLevel: self.oreo.minLevel,
                owned: true,
            };
        },
    }));

export default ItemsModel.create({
    robot: RobotModel.create(),
    multiplier: MultiplierModel.create(),
    oreo: OreoModel.create(),
});
