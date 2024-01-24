import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import Spacing from "../../../constants/Spacing";
import CardMenu from "../../../components/CardMenu";
import { router } from "expo-router";
import Icons from "../../../components/Icon";

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
                        onPress={() => router.push("/(tabs)/home/product/")}
                    />
                    <CardMenu 
                        name="layer-group"
                        type="font-awesome-5"
                        color={Colors.primary}
                        text="Category"
                        onPress={() => router.push("/(tabs)/home/product/")}
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
                        onPress={() => router.push("/(tabs)/home/product/")}
                    />
                    <CardMenu 
                        name="settings"
                        type="ionicon"
                        color={Colors.primary}
                        text="Settings"
                        onPress={() => router.push("/(tabs)/home/product/")}
                    />
                </View>
            </View>
            <View>
                <View
                    className="flex-row"
                >
                    <Text>
                        Top Recommended
                    </Text>
                    <TouchableOpacity>
                        <Icons 
                            name="filter"
                            type="ionicon"
                            size={24}
                            color="black"   
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomePage;