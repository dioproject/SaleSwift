import React from "react";
import { View, Text } from "react-native";
import Colors from "../../../constants/Colors";

const HistoryPage = () => {
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
                History Page
            </Text>
        </View>
    )
}

export default HistoryPage;