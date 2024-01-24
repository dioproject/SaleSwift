import { Stack } from "expo-router";

const HomeLayout = () => {
    return (
        <Stack 
            screenOptions={{
                title: "Product"
            }}
        >
            <Stack.Screen 
                name="purchase"
                options={{
                    title: "Purchase",
                }}
            />
        </Stack>        
    )
}

export default HomeLayout;