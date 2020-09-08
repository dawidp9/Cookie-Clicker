import { useRootStore } from '../../state/RootStateContext';
import { useEffect } from 'react';

export default () => {
    const { user, items } = useRootStore();

    useEffect(() => {
        const interval = setInterval(() => {
            user.addPoints(items.robot.owned);
        }, 1000);
        return () => clearInterval(interval);
    }, [user, items.robot.owned]);

    const onClickCookie = () => {
        user.addPointByClick();
    };

    return { onClickCookie, items };
};
