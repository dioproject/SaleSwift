import React from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from "../../components/AppTextInput";
import { useRouter } from "expo-router";
import TitleComponent from "../../components/Title";
import AppButton from "../../components/AppButton";

const LoginScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView>
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
                    <AppTextInput placeholder="Username or Email" />
                    <AppTextInput placeholder="Password" secureTextEntry />
                </View>
                <View>
                    <Text
                        style={{
                            fontWeight: "600",
                            fontSize: FontSize.small,
                            color: Colors.primary,
                            alignSelf: "flex-end",
                        }}
                    >
                        Forgot your password ?
                    </Text>
                </View>
                <AppButton text="Login" />
                <TouchableOpacity
                    onPress={() => router.push("/register/")}
                    style={{
                        padding: Spacing,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "600",
                            color: Colors.text,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Create new account
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;