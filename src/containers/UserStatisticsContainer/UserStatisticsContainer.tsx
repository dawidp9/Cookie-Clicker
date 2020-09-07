import * as React from 'react';
import useUserStatisticsContainer from './useUserStatisticsContainer';
import { Row, Col } from 'react-flexbox-grid';
import { observer } from 'mobx-react-lite';

const UserStatisticsContainer = () => {
    const { user } = useUserStatisticsContainer();

    return (
        <Col>
            <Row middle="xs" center="xs">
                <h1>Level: {user.currentLevel}</h1>
            </Row>
            <Row middle="xs" center="xs">
                Next Level: {user.nextLevelRequirePoints}
            </Row>
            <Row middle="xs" center="xs">
                <h1>Points: {user.allPoints}</h1>
            </Row>
        </Col>
    );
};

export default observer(UserStatisticsContainer);
