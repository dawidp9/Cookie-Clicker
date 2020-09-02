import * as React from 'react';
import useCookieContainer from './useCookieContainer';
import Cookie from '../../components/Cookie/Cookie';
import { Row } from 'react-flexbox-grid';

const CookieContainer = () => {
    const { onClickCookie, ownedOreo } = useCookieContainer();

    return (
        <>
            <Row middle="xs" center="xs">
                <Cookie
                    icon={ownedOreo ? 'Oreo' : 'Cookie'}
                    onClick={onClickCookie}
                />
            </Row>
        </>
    );
};

export default CookieContainer;
