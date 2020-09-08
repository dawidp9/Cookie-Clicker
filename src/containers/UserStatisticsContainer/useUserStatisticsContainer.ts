import { useRootStore } from '../../state/RootStateContext';

export default () => {
    const { user } = useRootStore();

    return { user };
};
