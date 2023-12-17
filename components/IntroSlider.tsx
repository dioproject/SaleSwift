import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from '@react-navigation/native';
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

export default function IntroSlider() {
    const [showRegister, setShowRegister] = useState(true);
    const navigation = useNavigation();

    const buttonLabel = (label: string) => {
        return (
            <View className="p-3">
                <Text
                    className="font-semibold font-sm"
                    style={{
                        color: COLORS.title,
                    }}
                >
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
                        <View
                            className="flex-1 align-center p-2.5 pt-100"
                        >
                            <Image 
                                source={item.image}
                                className="h-400"
                                style={{
                                    width: SIZES.width = 20
                                }}
                                resizeMode="contain"
                            />
                            <Text
                                className="font-bold text-2xl"
                                style={{
                                    color: COLORS.title,
                                }}
                            >
                                {item.name}
                            </Text>
                            <Text
                                className="text-center pt-1.5"
                                style={{
                                    color: COLORS.title,
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
}


// import React, { useState } from "react";
// import { View, Image, Text } from "react-native";
// import AppIntroSlider from "react-native-app-intro-slider";
// import { SIZES, COLORS } from "../constants/theme";

// const slides = [
//     {
//         id : 1,
//         name : "Sale",
//         description : "An application that helps small - medium businesses in the community",
//         image : require("../assets/images/slide1.png"),
//     },
//     {
//         id : 2,
//         name : "Cashier",
//         description : "Cashier integrated with digital payment method technology",
//         image : require("../assets/images/slide2.png"),
//     },
//     {
//         id : 3,
//         name : "Efficiency",
//         description : "Saves time and is practical",
//         image : require("../assets/images/slide3.png"),
//     },
// ]

// export default class App extends React.Component {
//     state = {
//         showRegister: false
//     }

//     _renderItem = ({ item }) => {
//         return (
//             <View className="flex-1 align-center p-2.5 pt-100">
//                 <Image 
//                     source={item.image}
//                     className="h-400"
//                     style={{
//                         width: SIZES.width = 20
//                     }}
//                     resizeMode="contain"
//                 />
//                 <Text
//                     className="font-bold text-2xl"
//                     style={{
//                         color: COLORS.title,
//                     }}
//                 >
//                     {item.name}
//                 </Text>
//                 <Text
//                     className="text-center pt-1.5"
//                     style={{
//                         color: COLORS.title,
//                     }}
//                 >
//                     {item.description}
//                 </Text>
//             </View>
//         )
//     }

//     _onDone = () => {
//         this.setState({ showRegister: true });
//     }

//     buttonLabel = (label: string) => {
//         return (
//             <View className="p-3">
//                 <Text
//                     className="font-semibold font-sm"
//                     style={{
//                         color: COLORS.title,
//                     }}
//                 >
//                     {label}
//                 </Text>
//             </View>
//         )
//     }

//     render() {
//         if (this.state.showRegister) {
//             return <AppIntroSlider 
//                         renderItem={this._renderItem} 
//                         data={slides} 
//                         showSkipButton
//                         renderSkipButton={() => this.buttonLabel("Skip")}
//                         renderNextButton={() => this.buttonLabel("Next")}
//                         renderDoneButton={() => this.buttonLabel("Done")}
//                         onDone={this._onDone}
//                     />;
//         }
//     }
// }