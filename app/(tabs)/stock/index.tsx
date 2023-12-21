import React from "react";
import { View, Text } from "react-native";
import Colors from "../../../constants/Colors";

const StockPage = () => {
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
                Stock Page
            </Text>
        </View>
    )
}

export default StockPage;