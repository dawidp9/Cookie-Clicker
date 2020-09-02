import * as React from 'react';
import * as Styled from './Cookie.styled';
import { IconManager } from '../_universal';
import { IconName } from '../../types/CommonTypes';

interface IProps {
    onClick: () => void;
    icon: IconName;
}

const Cookie = ({ icon, onClick }: IProps) => {
    return (
        <Styled.Wrapper onClick={onClick}>
            <IconManager size={300} name={icon} className={'Cookie'} />
        </Styled.Wrapper>
    );
};

export default Cookie;
