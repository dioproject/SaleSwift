import React from "react";
import { View, Image, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Spacing from "../constants/Spacing";
import Layout from "../constants/Layout";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import { useRouter } from "expo-router";
import { useFonts } from "../constants/Fonts";

const IntroScreen = () => {
    const router = useRouter();

    const fontsLoaded = useFonts();

    if(!fontsLoaded){
        return null;
    }

    return (
        <SafeAreaView>
            <View>
                <Image
                    source={require("../assets/images/slide1.png")}
                    style={{
                        height: Layout.height / 2.5,
                    }}
                    resizeMode="contain"
                />
                <View
                    style={{
                        paddingHorizontal: Spacing * 4,
                        paddingTop: Spacing * 4,
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.xxLarge,
                            color: Colors.primary,
                            fontFamily: "poppins-bold",
                            textAlign: "center",

                        }}
                    >
                        Let's join to help your business
                    </Text>
                    <Text
                        style={{
                            textAlign: "center",
                            fontFamily: "poppins-regular",
                            color: Colors.text,
                            marginTop: Spacing * 2,
                        }}
                    >
                        An application that helps small - medium businesses in the community
                    </Text>
                </View>
                <View
                    style={{
                        paddingHorizontal: Spacing * 2,
                        paddingTop: Spacing * 6,
                        flexDirection: "row",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => router.push("/login/")}
                        style={{
                            backgroundColor: Colors.primary,
                            paddingVertical: Spacing * 1.5,
                            paddingHorizontal: Spacing * 2,
                            width: "48%",
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
                                fontFamily: "poppins-bold",
                                color: Colors.onPrimary,
                                fontSize: FontSize.large,
                                textAlign: "center",
                            }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push("/register/")}
                        style={{
                            paddingVertical: Spacing * 1.5,
                            paddingHorizontal: Spacing * 2,
                            width: "48%",
                            borderRadius: Spacing,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "poppins-bold",
                                color: Colors.text,
                                fontSize: FontSize.large,
                                textAlign: "center",
                            }}
                        >
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default IntroScreen;