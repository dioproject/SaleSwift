import React from "react";
import { View, Text } from "react-native";
import Colors from "../../../constants/Colors";

const HomePage = () => {

    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text
                style={{
                    color: Colors.text,
                }}
            >
                Home Page
            </Text>
        </View>
    )
}

export default HomePage;