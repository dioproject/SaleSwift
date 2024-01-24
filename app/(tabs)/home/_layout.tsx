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
                options={{
                    title: "Products",
                }}
            />
        </Stack>
    )
}

export default HomeLayout;