import { Stack } from "expo-router";

const HomeLayout = () => {
    return (
        <Stack 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name="product"                
            />
        </Stack>
    )
}

export default HomeLayout;