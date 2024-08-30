import { Stack } from "expo-router";

export default function MainLayout() {
    return(
        <Stack 
            screenOptions={{
                headerShown:false,
            }}
        >

            <Stack.Screen 
                name="(tabs)" 
                options={
                    {
                        title:"Registro",
                        headerTitleAlign:'center',
                    }
                } 
            />
            <Stack.Screen 
                name="(main)" 
                options={
                    {
                        title:"Registro",
                        headerTitleAlign:'center',
                    }
                } 
            />
            <Stack.Screen 
                name="(auth)" 
                options={
                    {
                        title:"Verificacion",
                        headerTitleAlign:'center',
                    }
                } 
            />
        </Stack>
    )
}