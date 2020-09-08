import * as React from 'react';
import useStoreContainer from './useStoreContainer';
import StoreItem from '../../components/StoreItem/StoreItem';
import { observer } from 'mobx-react-lite';

const StoreContainer = () => {
    const {
        items,
        user,
        onClickBuyRobot,
        onClickBuyMultiplier,
        onClickBuyOreo,
    } = useStoreContainer();

    return (
        <>
            <h1>Store:</h1>
            <StoreItem
                enabled={user.currentLevel >= items.robot.minLevel}
                name={items.robot.name}
                price={items.robot.price}
                minLvl={items.robot.minLevel}
                icon={'Robot'}
                onClickBuy={onClickBuyRobot}
            />
            <StoreItem
                enabled={user.currentLevel >= items.multiplier.minLevel}
                name={items.multiplier.name}
                price={items.multiplier.price}
                icon={'Click'}
                onClickBuy={onClickBuyMultiplier}
                minLvl={items.multiplier.minLevel}
            />
            <StoreItem
                enabled={user.currentLevel >= items.oreo.minLevel}
                name={items.oreo.name}
                price={items.oreo.price}
                icon={'Oreo'}
                onClickBuy={onClickBuyOreo}
                minLvl={items.oreo.minLevel}
                owned={items.oreo.owned}
            />
        </>
    );
};

export default observer(StoreContainer);
