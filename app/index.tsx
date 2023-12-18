import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { SIZES, COLORS } from "../constants/theme";
import { StatusBar } from "expo-status-bar";

const slides = [
    {
        id : 1,
        name : "Sale",
        description : "An application that helps small - medium businesses in the community",
        image : require("../assets/images/slide1.png"),
    },
    {
        id : 2,
        name : "Cashier",
        description : "Cashier integrated with digital payment method technology",
        image : require("../assets/images/slide2.png"),
    },
    {
        id : 3,
        name : "Efficiency",
        description : "Saves time and is practical",
        image : require("../assets/images/slide3.png"),
    },
]

export default function App() {
    const [showRegister, setShowRegister] = useState(true);

    const buttonLabel = (label: string) => {
        return (
            <View style={{padding: 5,}}>
                <Text style={styles.buttonLabel}>
                    {label}
                </Text>
            </View>
        )
    }

    if(!showRegister) {
        return (
            <AppIntroSlider 
                data={slides}
                renderItem={({item}) => {
                    return (
                        <View style={styles.container}>
                            <Image 
                                source={item.image}
                                style={styles.img}
                                resizeMode="contain"
                            />
                            <Text style={styles.title}>
                                {item.name}
                            </Text>
                            <Text style={styles.desc}
                            >
                                {item.description}
                            </Text>
                        </View>
                    )
                }}
                activeDotStyle={{
                    backgroundColor: COLORS.background,
                    width: 30,
                }}
                showSkipButton
                renderNextButton={() => buttonLabel("Next")}
                renderSkipButton={() => buttonLabel("Skip")}
                renderDoneButton={() => buttonLabel("Done")}
                onDone={() => {
                    setShowRegister(true);                
                }}
            />
            
        );
    }    
    
    return (
        <View>
            <Text>Testing</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 5,
        paddingTop: 150,
    },
    img: {
        width: SIZES.width = 400,
        height: SIZES.height = 400,
    },
    title: {
        color: COLORS.font,
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
    },
    desc: {
        color: COLORS.font,
        textAlign: "center",
        paddingTop: 3
    },
    buttonLabel: {
        color: COLORS.font,
        fontWeight: "bold",
        fontSize: 16,
    },
});