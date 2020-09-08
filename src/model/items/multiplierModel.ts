import { types } from 'mobx-state-tree';

const MultiplierModel = types.model('MultiplierModel', {
    name: 'Multiplier',
    price: 20,
    minLevel: 2,
    owned: 1,
});

export default MultiplierModel;
