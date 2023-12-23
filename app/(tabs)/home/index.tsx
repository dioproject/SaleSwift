import React from "react";
import { View, Text, Image } from "react-native";
import Colors from "../../../constants/Colors";
import Spacing from "../../../constants/Spacing";

const HomePage = () => {

    return (
        <View
            style={{
                marginVertical: Spacing * 2,
            }}
        >
            <View
                className="flex-row p-2.5"
            >
                <Image
                    className="rounded-full mx-2.5"
                    source={require("../../../assets/images/user.png")}
                    style={{
                        height: Spacing * 4,
                        width: Spacing * 4,
                    }}
                />

                <View
                    className="flex-1 self-center "
                >
                    <Text
                        className="text-sm font-bold"
                    >
                        Dio Galang F
                    </Text>
                    <Text
                        className="text-xs font-600"
                    >
                        Admin Cafe Senja
                    </Text>
                </View>

                
            </View>
        </View>
    )
}

export default HomePage;