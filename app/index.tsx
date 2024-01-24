import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Spacing from "../constants/Spacing";
import TitleComponent from "../components/Title";
import FontSize from "../constants/FontSize";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const LoginScreen = () => {
    return (
        <SafeAreaView
            className="my"
        >
            <View
                style={{
                    padding: Spacing * 2,
                }}
            >
                <View 
                    style={{
                        alignItems: "center",
                    }}
                >
                    <TitleComponent 
                            text="Login Here" 
                            style={{
                                fontSize: FontSize.xLarge, 
                                marginVertical: Spacing * 3,
                            }} 
                        />
                    <Text
                        style={{
                            fontWeight: "600",
                            fontSize: FontSize.large,
                            maxWidth: "60%",
                            textAlign: "center",
                        }}
                    >
                        Welcome back you've been missed!
                    </Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >
                    <AppTextInput placeholder="Your License" />
                </View>
                <AppButton text="Login" />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;