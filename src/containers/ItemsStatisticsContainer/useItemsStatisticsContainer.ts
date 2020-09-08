import { useRootStore } from '../../model/RootStateContext';

export default () => {
    const { user, items } = useRootStore();

    return { user, items };
};
