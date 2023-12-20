import React from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from "../../components/AppTextInput";
import { useRouter } from "expo-router";
import TitleComponent from "../../components/Title";

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
                <TouchableOpacity
                    style={{
                        padding: Spacing * 2,
                        backgroundColor: Colors.primary,
                        marginVertical: Spacing * 3,
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
                            fontWeight: "bold",
                            color: Colors.onPrimary,
                            textAlign: "center",
                            fontSize: FontSize.large,
                        }}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
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
                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "600",
                            color: Colors.primary,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Or continue with
                    </Text>
                    <View
                        style={{
                            marginTop: Spacing,
                            flexDirection: "row",
                            justifyContent: "center",
                            marginHorizontal: Spacing
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                padding: Spacing,
                                backgroundColor: Colors.gray,
                                borderRadius: Spacing / 2,
                            }}
                        >
                            <Ionicons 
                                name="logo-google"
                                color={Colors.text}
                                size={Spacing * 2}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: Spacing,
                                backgroundColor: Colors.gray,
                                borderRadius: Spacing / 2,
                            }}
                        >
                            <Ionicons 
                                name="logo-facebook"
                                color={Colors.text}
                                size={Spacing * 2}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;