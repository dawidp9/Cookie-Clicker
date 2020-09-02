import { useSelector } from 'react-redux';
import { RootState } from '../../types/CommonTypes';

export default () => {
    const multiplier = useSelector(
        (state: RootState) => state.points.multiplier,
    );
    const robotsOwned = useSelector(
        (state: RootState) => state.store.robot.owned,
    );

    return { multiplier, robotsOwned };
};
