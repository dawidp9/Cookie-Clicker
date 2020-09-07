import React from 'react';
import './App.css';
import CookieContainer from '../containers/CookieContainer/CookieContainer';
import UserStatisticsContainer from '../containers/UserStatisticsContainer/UserStatisticsContainer';
import { Col, Grid, Row } from 'react-flexbox-grid';
import ItemsStatisticsContainer from '../containers/ItemsStatisticsContainer/ItemsStatisticsContainer';
import StoreContainer from '../containers/StoreContainer/StoreContainer';

const App = () => {
    return (
        <div className={'App'}>
            <Grid>
                <Col xs={12}>
                    <Row middle="xs" center="xs">
                        <Col xs>
                            <UserStatisticsContainer />
                            <CookieContainer />
                            <ItemsStatisticsContainer />
                        </Col>
                        <Col xs>
                            <StoreContainer />
                        </Col>
                    </Row>
                </Col>
            </Grid>
        </div>
    );
};

export default App;
