import { types } from 'mobx-state-tree';

const OreoModel = types.model('MultiplierModel', {
    name: 'Oreo',
    price: 200,
    minLevel: 3,
    owned: false,
});

export default OreoModel;
