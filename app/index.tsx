import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { SIZES, COLORS } from "../constants/theme";

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

const landing: React.FC = () => {
    const [showRegister, setShowRegister] = useState(true);

    const buttonLabel = (label: string) => {
        return (
            <View className="p-3" style={{padding: 5,}}>
                <Text
                    className="font-semibold font-sm"
                    style={{
                        color: COLORS.title,
                        fontWeight: "bold",
                        fontSize: 16,
                    }}
                >
                    {label}
                </Text>
            </View>
        )
    }

    return (
        <AppIntroSlider 
            data={slides}
            renderItem={({item}) => {
                return (
                    <View className="flex-1 items-center p-3 pt-200"
                        style={{
                            flex: 1,
                            alignItems: "center",
                            padding: 5,
                            paddingTop: 150,
                        }}
                    >
                        <Image 
                            source={item.image}
                            style={{
                                width: SIZES.width = 400,
                                height: SIZES.height = 400,
                            }}
                            resizeMode="contain"
                        />
                        <Text
                            className="font-bold text-center text-2xl"
                            style={{
                                color: COLORS.title,
                                textAlign: "center",
                                fontSize: 22,
                                fontWeight: "bold",
                            }}
                        >
                            {item.name}
                        </Text>
                        <Text
                            className="text-center pt-1.5"
                            style={{
                                color: COLORS.title,
                                textAlign: "center",
                                paddingTop: 3
                            }}
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
    )
}

export default landing;