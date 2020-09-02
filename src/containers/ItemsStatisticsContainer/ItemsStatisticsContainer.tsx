import * as React from 'react';
import useItemsStatisticsContainer from './useItemsStatisticsContainer';
import InfoText from '../../components/InfoText/InfoText';

const ItemsStatisticsContainer = () => {
    const { multiplier, robotsOwned } = useItemsStatisticsContainer();

    return (
        <>
            <InfoText icon={'Click'}>x{multiplier}</InfoText>
            <InfoText icon={'Robot'}>clicks per second: {robotsOwned}</InfoText>
        </>
    );
};

export default ItemsStatisticsContainer;
