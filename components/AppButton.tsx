import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import { router } from "expo-router";

interface buttonComponentProps {
    text: string;
}

const AppButton: React.FC<buttonComponentProps> = ({text}) => {
    return (
        <TouchableOpacity
            onPress={() => router.push("/(tabs)/home")}
            style={{
                padding: Spacing * 2,
                backgroundColor: Colors.primary,
                marginVertical: Spacing * 3,
                borderRadius: Spacing,
                shadowColor: Colors.primary,
                shadowOffset: {
                width: 0,
                height: Spacing,
                },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
            }}
        >
            <Text
                style={{
                    fontWeight: "bold",
                    color: Colors.onPrimary,
                    textAlign: "center",
                    fontSize: FontSize.large,
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default AppButton;