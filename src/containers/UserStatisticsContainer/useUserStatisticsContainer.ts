import { useRootStore } from '../../state/RootStateContext';
import { useEffect } from 'react';

export default () => {
    const { user } = useRootStore();

    useEffect(() => {
        if (user.allPoints >= user.nextLevelRequirePoints) {
            user.setNextLevel();
        }
    }, [user.allPoints, user]);

    return {
        user,
    };
};
