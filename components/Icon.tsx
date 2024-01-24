import React from "react";
import { Icon } from '@rneui/themed';

interface iconProps {
    name: string;
    type: string;
    color: string;
    size: number;
}

const Icons: React.FC<iconProps> = ({
    name,
    type,
    color,
    size,
}) => {
    return (
        <Icon
            name={name}
            type={type}
            color={color}
            size={size}
        />
    )
}

export default Icons;