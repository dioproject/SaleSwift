import { router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";

const ProductPage = () => {
    return (
        <View>
            <Text>
                Product Page
            </Text>
            <TouchableOpacity onPress={() => router.push("/(tabs)/home/product/purchase/")} >
                <Text>
                    Test
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductPage;