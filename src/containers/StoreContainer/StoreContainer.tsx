import * as React from 'react';
import useStoreContainer from './useStoreContainer';
import StoreItem from '../../components/StoreItem/StoreItem';

const StoreContainer = () => {
    const {
        robot,
        multiplier,
        level,
        oreo,
        onClickBuyRobot,
        onClickBuyMultiplier,
        onClickBuyOreo,
    } = useStoreContainer();

    return (
        <>
            <h1>Store:</h1>
            <StoreItem
                enabled={level >= robot.minLevel}
                name={robot.name}
                price={robot.price}
                minLvl={robot.minLevel}
                icon={'Robot'}
                onClickBuy={onClickBuyRobot}
            />
            <StoreItem
                enabled={level >= multiplier.minLevel}
                name={multiplier.name}
                price={multiplier.price}
                icon={'Click'}
                onClickBuy={onClickBuyMultiplier}
                minLvl={multiplier.minLevel}
            />
            <StoreItem
                enabled={level >= oreo.minLevel}
                name={oreo.name}
                price={oreo.price}
                icon={'Oreo'}
                onClickBuy={onClickBuyOreo}
                minLvl={oreo.minLevel}
                owned={oreo.owned}
            />
        </>
    );
};

export default StoreContainer;
