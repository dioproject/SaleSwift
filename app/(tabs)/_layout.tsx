import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const BottomBar = () => {
    return(
        <Tabs>
            <Tabs.Screen 
                name="Home"
                options={{
                    href: "home",
                    tabBarIcon: ({color}) => (
                        <Ionicons name="home" size={24} color={color} />
                    ),
                    tabBarLabel: "Home"
                }}
            />
            <Tabs.Screen 
                name="Stock"
                options={{
                    href: "stock",
                    tabBarIcon: ({color}) => (
                        <Entypo name="shopping-cart" size={24} color={color} />
                    ),
                    tabBarLabel: "Stock"
                }}
            />
            <Tabs.Screen 
                name="History"
                options={{
                    href: "history",
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="history" size={24} color={color} />
                    ),
                    tabBarLabel: "History"
                }}
            />
            <Tabs.Screen 
                name="Profile"
                options={{
                    href: "profile",
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                    tabBarLabel: "Profile"
                }}
            />
        </Tabs>
    )
}

export default BottomBar;