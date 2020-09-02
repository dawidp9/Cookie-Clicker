import { addPointByClick, addPoints } from '../../state/points/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types/CommonTypes';
import { useEffect } from 'react';

export default () => {
    const dispatch = useDispatch();
    const ownedOreo = useSelector((state: RootState) => state.store.oreo.owned);
    const robotsOwned = useSelector(
        (state: RootState) => state.store.robot.owned,
    );

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addPoints(robotsOwned));
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch, robotsOwned]);

    const onClickCookie = () => {
        dispatch(addPointByClick());
    };

    return { onClickCookie, ownedOreo };
};
