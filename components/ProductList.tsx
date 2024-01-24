import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import Layout from "../constants/Layout";

interface listProps {
    name: string;
    sold: string;
    image?: any;   
}

const ProductList: React.FC<listProps> = ({
    name,
    sold,
    image,
}) => {
    const Card = () => {
        return (
            <View>
                <View>
                    <Image 
                        source={image}
                        style={{
                            flex: 1,
                            resizeMode: "contain",
                        }}
                    />
                </View>
                <View>
                    <Text>
                        {name}
                    </Text>
                    <Text>
                        {sold}
                    </Text>
                </View>
            </View>
        )
    }
    return ( 
        <View>
            <FlatList
                data={} 
                renderItem={() => {
                    return (
                        <Card />

                    )
                }}
            />
        </View>
    );
}

export default ProductList;