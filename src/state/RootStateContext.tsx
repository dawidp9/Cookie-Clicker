import React, { createContext, useContext } from 'react';
import UserStore from './user/store';
import ItemsStore from './items/store';

type RootStateContextValue = {
    user: typeof UserStore;
    items: typeof ItemsStore;
};

const RootStateContext = createContext<RootStateContextValue>(
    {} as RootStateContextValue,
);

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
}) => {
    return (
        <RootStateContext.Provider
            value={{
                user: UserStore,
                items: ItemsStore,
            }}
        >
            {children}
        </RootStateContext.Provider>
    );
};

export const useRootStore = () => useContext(RootStateContext);
