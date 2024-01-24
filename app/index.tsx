import React from "react";
import { View, Image, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Spacing from "../constants/Spacing";
import Layout from "../constants/Layout";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import { useRouter } from "expo-router";
import TitleComponent from "../components/Title";


const IntroScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView>
            <View
                style={{
                    marginVertical: Spacing * 4,
                }}
            >
                <Image
                    source={require("../assets/images/slide1.png")}
                    style={{
                        height: Layout.height / 2.5,
                        width: Layout.width,
                    }}
                    resizeMode="contain"
                />
                <View
                    style={{
                        paddingHorizontal: Spacing * 4,
                        paddingTop: Spacing * 4,
                    }}
                >
                    <TitleComponent text="Let's join to help your business" style={{fontSize: FontSize.xxLarge, textAlign: "center"}} />
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "normal",
                            color: Colors.text,
                            marginVertical: Spacing * 2,
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
                        margin: Spacing,
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
                            className="font-bold text-center"
                            style={{
                                color: Colors.onPrimary,
                                fontSize: FontSize.large,
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
                                fontWeight: "600",
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