import * as React from 'react';
import * as Styled from './InfoText.styled';
import { IconManager } from '../_universal';
import { IconName } from '../../types/CommonTypes';
import { Row } from 'react-flexbox-grid';

interface IProps {
    icon: IconName;
    iconSize?: number;
    children: React.ReactNode;
}

const InfoText = ({ icon, iconSize, children }: IProps) => {
    return (
        <Styled.Wrapper>
            <Row middle="xs" center="xs">
                <IconManager size={iconSize ? iconSize : 50} name={icon} />
                <Styled.BigText>{children}</Styled.BigText>
            </Row>
        </Styled.Wrapper>
    );
};

export default InfoText;
