import { types } from 'mobx-state-tree';

const RobotModel = types.model('RobotModel', {
    name: 'Robot',
    price: 20,
    minLevel: 2,
    owned: 0,
});

export default RobotModel;
