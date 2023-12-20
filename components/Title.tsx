import React, { useEffect, useState } from "react";
import { Text, TextStyle, StyleProp, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import * as Font from "expo-font";

interface titleComponentProps {
    text: string;
    style?: StyleProp<TextStyle>;
}

const TitleComponent: React.FC<titleComponentProps> = ({text, style}) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
            });
            setFontsLoaded(true);
        })();
    }, []);
  
    if(!fontsLoaded){
        return null;
    }

    return <Text style={[
                    styles.textTitle,
                    style,
                ]}
            >
                {text}
            </Text>
}

export default TitleComponent;

const styles = StyleSheet.create({
    textTitle: {
        color: Colors.primary,
        fontFamily: "poppins-bold",
    }
})