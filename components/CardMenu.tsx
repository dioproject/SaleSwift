import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Icon } from '@rneui/themed';

interface cardProps {
    text: string;
    name: string;
    type: string;
    color: string;
    onPress: () => void;
}

const CardMenu: React.FC<cardProps>= ({
    text,
    name,
    type,
    color,
    onPress,
}) => {    
    return (
        <TouchableOpacity
            className="w-5/12 h-5/12 p-5 mx-1 my-1 bg-white border-[#ECECEC] rounded-md"
            onPress={onPress}
        >
            <Icon
                name={name}
                type={type}
                color={color}
                size={40}
            />
            <Text className="text-center font-semibold">
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default CardMenu;