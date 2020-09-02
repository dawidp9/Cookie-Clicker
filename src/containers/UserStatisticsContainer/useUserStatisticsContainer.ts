import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types/CommonTypes';
import { useEffect } from 'react';
import { setNextLevel } from '../../state/level/actions';

export default () => {
    const dispatch = useDispatch();
    const allPoints = useSelector((state: RootState) => state.points.allPoints);
    const level = useSelector((state: RootState) => state.level);

    const currentLevel = level.currentLevel;
    const nextLevelPoints = level.requirePoints;

    useEffect(() => {
        if (allPoints >= nextLevelPoints) {
            dispatch(setNextLevel());
        }
    }, [dispatch, allPoints, nextLevelPoints]);

    return { currentLevel, allPoints, nextLevelPoints };
};
