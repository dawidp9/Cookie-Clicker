import React, { createContext, useContext } from 'react';
import UserModel from './user/userModel';
import ItemsModel from './items/itemsModel';

type RootStateContextValue = {
    user: typeof UserModel;
    items: typeof ItemsModel;
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
                user: UserModel,
                items: ItemsModel,
            }}
        >
            {children}
        </RootStateContext.Provider>
    );
};

export const useRootStore = () => useContext(RootStateContext);
