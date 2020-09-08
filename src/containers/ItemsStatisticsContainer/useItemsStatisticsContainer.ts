import { useRootStore } from '../../state/RootStateContext';

export default () => {
    const { user, items } = useRootStore();

    return { user, items };
};
