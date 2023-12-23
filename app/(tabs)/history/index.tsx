import React from "react";
import { View, Text } from "react-native";
import Colors from "../../../constants/Colors";

const HistoryPage = () => {
    return (
        <View
            className="flex-1 justify-center align-center"
        >
            <Text
                className="text-center"
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