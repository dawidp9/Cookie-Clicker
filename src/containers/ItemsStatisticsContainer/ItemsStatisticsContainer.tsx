import * as React from 'react';
import useItemsStatisticsContainer from './useItemsStatisticsContainer';
import InfoText from '../../components/InfoText/InfoText';
import { observer } from 'mobx-react-lite';

const ItemsStatisticsContainer = () => {
    const { user, items } = useItemsStatisticsContainer();

    return (
        <>
            <InfoText icon={'Click'}>x{user.multiplier}</InfoText>
            <InfoText icon={'Robot'}>
                clicks per second: {items.robot.owned}
            </InfoText>
        </>
    );
};

export default observer(ItemsStatisticsContainer);
