import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons'

import { Provider } from 'react-redux'
import { Store } from '../redux/store';

// Screens
import HomeScreen from './screens/homeScreen';
import BookingScreen from './screens/bookingScreen';
import ProfileScreen from './screens/profileScreen';
import SettingsScreen from './screens/settingsScreen';
import CarDetailsScreen from './screens/carDetailsScreen';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

function Home() {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'Booking') {
                        iconName = focused ? 'car' : 'car-outline'
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline'
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { paddingVertical: 8, height: 90 }
            })}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Booking' component={BookingScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default function MainContainer() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer >
        </Provider>
    );
}