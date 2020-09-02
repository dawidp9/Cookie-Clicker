import * as React from 'react';
import * as Styled from './StoreItem.styled';
import { Col, Row } from 'react-flexbox-grid';
import { IconManager } from '../_universal';
import { IconName } from '../../types/CommonTypes';
import { BuyButton } from './StoreItem.styled';

interface IProps {
    enabled: boolean;
    name: string;
    price: number;
    minLvl: number;
    onClickBuy: () => void;
    icon?: IconName;
    owned?: boolean;
}

const StoreItem = ({
    enabled,
    name,
    price,
    onClickBuy,
    icon,
    minLvl,
    owned,
}: IProps) => {
    return (
        <Styled.Wrapper>
            {enabled ? (
                owned ? (
                    <Row middle="xs" center="xs">
                        {icon && (
                            <Col>
                                <IconManager size={50} name={icon} />
                            </Col>
                        )}
                        <Col xs>Bought</Col>
                    </Row>
                ) : (
                    <Row middle="xs">
                        {icon && (
                            <Col>
                                <IconManager size={50} name={icon} />
                            </Col>
                        )}
                        <Col xs> {name}</Col>
                        <Col xs>price: {price}</Col>
                        <Col xs>minLvl: {minLvl}</Col>
                        <Col xs>
                            <BuyButton onClick={onClickBuy}>Buy</BuyButton>
                        </Col>
                    </Row>
                )
            ) : (
                <Row middle="xs" center="xs">
                    {icon && (
                        <Col>
                            <IconManager size={50} name={icon} />
                        </Col>
                    )}
                    <Col xs>Unlock on level {minLvl}</Col>
                </Row>
            )}
        </Styled.Wrapper>
    );
};

export default StoreItem;
