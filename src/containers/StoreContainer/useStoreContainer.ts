import { useRootStore } from '../../state/RootStateContext';

export default () => {
    const { items, user } = useRootStore();

    const showNotEnoughPointsAlert = () =>
        alert("You don't have enough user :(");

    const onClickBuyRobot = () => {
        const price = items.robot.price;
        if (price <= user.allPoints) {
            items.buyRobot();
            user.subtractPoints(price);
        } else {
            showNotEnoughPointsAlert();
        }
    };

    const onClickBuyMultiplier = () => {
        const price = items.multiplier.price;
        if (price <= user.allPoints) {
            items.buyMultiplier();
            user.subtractPoints(price);
            user.setPointsMultiplier(items.multiplier.owned);
        } else {
            showNotEnoughPointsAlert();
        }
    };

    const onClickBuyOreo = () => {
        const price = items.oreo.price;
        if (price <= user.allPoints) {
            items.buyOreo();
            user.subtractPoints(price);
        } else {
            showNotEnoughPointsAlert();
        }
    };

    return {
        items,
        user,
        onClickBuyRobot,
        onClickBuyMultiplier,
        onClickBuyOreo,
    };
};
