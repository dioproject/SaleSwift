import React from "react";
import { View, Text } from "react-native";
import Colors from "../../../constants/Colors";

const ProfilePage = () => {
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
                Profile Page
            </Text>
        </View>
    )
}

export default ProfilePage;