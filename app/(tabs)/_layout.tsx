import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';

const BottomBar = () => {
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    href: "home",
                    tabBarIcon: ({color}) => (
                        <Ionicons name="home" size={24} color={color} />
                    ),
                    tabBarLabel: "Home",
                }}
            />
            <Tabs.Screen 
                name="report"
                options={{
                    href: "report",
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="bar-chart" size={24} color={color} />
                    ),
                    tabBarLabel: "Report",
                }}
            />
            <Tabs.Screen 
                name="history"
                options={{
                    href: "history",
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="history" size={24} color={color} />
                    ),
                    tabBarLabel: "History",
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    href: "profile",
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                    tabBarLabel: "Profile",
                }}
            />
        </Tabs>
    )
}

export default BottomBar;