import * as React from 'react';
import useUserStatisticsContainer from './useUserStatisticsContainer';
import { Row, Col } from 'react-flexbox-grid';

const UserStatisticsContainer = () => {
    const {
        currentLevel,
        nextLevelPoints,
        allPoints,
    } = useUserStatisticsContainer();

    return (
        <Col>
            <Row middle="xs" center="xs">
                <h1>Level: {currentLevel}</h1>
            </Row>
            <Row middle="xs" center="xs">
                Next Level: {nextLevelPoints}
            </Row>
            <Row middle="xs" center="xs">
                <h1>Points: {allPoints}</h1>
            </Row>
        </Col>
    );
};

export default UserStatisticsContainer;
