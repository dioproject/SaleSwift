import React from "react";
import { View, Text, Image } from "react-native";
import Colors from "../../../constants/Colors";
import Spacing from "../../../constants/Spacing";
import CardMenu from "../../../components/CardMenu";

const HomePage = () => {

    return (
        <View
            className="py-5"
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
                    className="flex-1 self-center"
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

            {/* Card Menu */}
            <View
                className="justify-center items-center"
            >
                <View
                    className="flex-row"
                >
                    <CardMenu 
                        name="shopping-bag"
                        type="font-awesome"
                        color={Colors.primary}
                        text="Product"
                    />
                    <CardMenu 
                        name="layer-group"
                        type="font-awesome-5"
                        color={Colors.primary}
                        text="Category"
                    />
                </View>
                <View
                    className="flex-row"
                >
                    <CardMenu 
                        name="file-invoice"
                        type="font-awesome-5"
                        color={Colors.primary}
                        text="Book Keeping"
                    />
                    <CardMenu 
                        name="settings"
                        type="ionicon"
                        color={Colors.primary}
                        text="Settings"
                    />
                </View>
            </View>
        </View>
    )
}

export default HomePage;