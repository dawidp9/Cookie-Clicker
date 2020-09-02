import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types/CommonTypes';
import { buyMultiplier, buyOreo, buyRobot } from '../../state/store/actions';
import { setPointMultiplier, subtractPoints } from '../../state/points/actions';

export default () => {
    const dispatch = useDispatch();
    const allPoints = useSelector((state: RootState) => state.points.allPoints);
    const store = useSelector((state: RootState) => state.store);
    const level = useSelector((state: RootState) => state.level.currentLevel);
    const robot = store.robot;
    const multiplier = store.multiplier;
    const oreo = store.oreo;

    const showNotEnoughPointsAlert = () =>
        alert("You don't have enough points :(");

    const onClickBuyRobot = () => {
        if (allPoints >= robot.price) {
            dispatch(subtractPoints(robot.price));
            dispatch(buyRobot());
        } else {
            showNotEnoughPointsAlert();
        }
    };

    const onClickBuyMultiplier = () => {
        if (allPoints >= multiplier.price) {
            dispatch(subtractPoints(multiplier.price));
            dispatch(buyMultiplier());
            dispatch(setPointMultiplier(multiplier.owned + 1));
        } else {
            showNotEnoughPointsAlert();
        }
    };

    const onClickBuyOreo = () => {
        if (allPoints >= oreo.price) {
            dispatch(subtractPoints(oreo.price));
            dispatch(buyOreo());
        } else {
            showNotEnoughPointsAlert();
        }
    };

    return {
        allPoints,
        robot,
        multiplier,
        level,
        oreo,
        onClickBuyRobot,
        onClickBuyMultiplier,
        onClickBuyOreo,
    };
};
