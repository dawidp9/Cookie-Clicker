import * as React from 'react';
import useCookieContainer from './useCookieContainer';
import Cookie from '../../components/Cookie/Cookie';
import { Row } from 'react-flexbox-grid';
import { observer } from 'mobx-react-lite';

const CookieContainer = () => {
    const { onClickCookie, items } = useCookieContainer();

    return (
        <Row middle="xs" center="xs">
            <Cookie
                icon={items.oreo.owned ? 'Oreo' : 'Cookie'}
                onClick={onClickCookie}
            />
        </Row>
    );
};

export default observer(CookieContainer);
