import styled from 'styled-components';

export const Holder = styled.div<{
    rotate?: number;
    center?: boolean;
    size: number;
}>`
    cursor: pointer;
    display: flex;
    font-size: ${({ size }) => size}px;
    ${({ center }) => center && `align-self: center;`};
    ${({ rotate }) => rotate && `transform: rotate(${rotate}deg)`};
`;
