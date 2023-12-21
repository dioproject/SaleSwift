import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from "../../components/AppTextInput";
import { useRouter } from "expo-router";
import TitleComponent from "../../components/Title";
import AppButton from "../../components/AppButton";

const RegisterScreen: React.FC = () => {    
    const router = useRouter();

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
                        <TitleComponent 
                            text="Create Account" 
                            style={{
                                fontSize: FontSize.xLarge, 
                                marginVertical: Spacing * 3,
                            }} 
                        />
                        <Text
                            style={{
                                fontWeight: "normal",
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
                    <AppButton text="Register" />
                    <TouchableOpacity
                        onPress={() => router.push("/login/")}
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen;