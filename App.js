import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-reanimated'
import { Home } from "./screens/";
import { Dashboard } from "./screens"
import { useFonts } from 'expo-font';
import { NativeBaseProvider } from "native-base";
import Symptoms from "./screens/Symptoms"
import ChatScreen from './screens/ChatScreen';
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
        "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
    })

    if(!loaded){
        return null;
    }

    return (
    <NativeBaseProvider>
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Dashboard'}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="Symptoms" component={Symptoms} />
                    <Stack.Screen name="ChatScreen" component={ChatScreen} />

            </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
};

export default App;