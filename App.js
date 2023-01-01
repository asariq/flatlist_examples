import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthMain from "./src/screens/AuthPage";
import Collection from "./src/screens/collection";
import SwiperFlat from "./src/screens/CollectionWithSwiper";


const Stack = createNativeStackNavigator();

const App = () => {
    return (

        <NavigationContainer initialroutename={AuthMain} >
            <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="AuthMain" component={AuthMain} />
            <Stack.Screen name="Collection" component={Collection} />
            <Stack.Screen name="SwiperFlat" component={SwiperFlat} />
                </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App;