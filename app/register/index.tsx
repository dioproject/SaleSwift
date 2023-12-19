import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from "../../components/AppTextInput";
import { useRouter } from "expo-router";
import { useFonts } from "../../constants/Fonts";

const RegisterScreen: React.FC = () => {    
    const router = useRouter();

    const fontsLoaded = useFonts();

    if(!fontsLoaded){
        return null;
    }

    return (
        <SafeAreaView>
            <ScrollView>

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
                        <Text
                            style={{
                                fontSize: FontSize.xLarge,
                                color: Colors.primary,
                                fontFamily: "poppins-bold",
                                marginVertical: Spacing * 3,

                            }}
                        >
                            Create Account
                        </Text>
                        <Text
                            style={{
                                fontFamily: "poppins-regular",
                                fontSize: FontSize.small,
                                maxWidth: "80%",
                                textAlign: "center",
                            }}
                        >
                            Create an account so you can explore all available stores
                        </Text>
                    </View>
                    <View
                        style={{
                            marginVertical: Spacing * 3,
                        }}
                    >
                        <AppTextInput placeholder="Username"/>
                        <AppTextInput placeholder="Email"/>
                        <AppTextInput placeholder="Password" secureTextEntry />
                        <AppTextInput placeholder="Confirm Password" secureTextEntry />
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
                                fontFamily: "poppins-bold",
                                color: Colors.onPrimary,
                                textAlign: "center",
                                fontSize: FontSize.large,
                            }}
                        >
                            Register
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push("/login/")}
                        style={{
                            padding: Spacing,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "poppins-semiBold",
                                color: Colors.onPrimary,
                                textAlign: "center",
                                fontSize: FontSize.small,
                            }}
                        >
                            Already have an account
                        </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            marginVertical: Spacing * 3,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "poppins-semiBold",
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen;