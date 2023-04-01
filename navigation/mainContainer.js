import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from './screens/homeScreen';

const Tab = createBottomTabNavigator()

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'Home'}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: { paddingVertical: 8, height: 90 }
                })}>
                <Tab.Screen name="Home" component={HomeScreen} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}