import * as React from 'react';
import * as Styled from './IconManager.styled';
import * as Icons from '../../../shared/svgs/Icons';
import { IconName } from '../../../types/CommonTypes';

interface IProps {
    name?: IconName;
    size: number;
    sizeY?: number;
    rotate?: number;
    className?: string;
    center?: boolean;
}

const IconManager: React.FC<IProps> = ({
    name,
    size,
    sizeY,
    rotate,
    className,
    center,
}: IProps) => {
    const Icon = Icons[name || 'Cookie'];
    return (
        <Styled.Holder
            className={className}
            size={size}
            rotate={rotate}
            center={center}
        >
            <Icon sizeY={sizeY} />
        </Styled.Holder>
    );
};

export default IconManager;
