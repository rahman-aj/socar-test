import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import ActiveBookingScreen from './booking/activeBookingScreen'
import UpcomingBookingScreen from './booking/upcomingBookingScreen'
import CompletedBookingScreen from './booking/completedBookingScreen';

export default function BookingScreen({ navigation }) {
    return (
        <Tab.Navigator
            initialRouteName='Active'
            screenOptions={{
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Active" component={ActiveBookingScreen} />
            <Tab.Screen name="UpComing" component={UpcomingBookingScreen} />
            <Tab.Screen name="Ended" component={CompletedBookingScreen} />
        </Tab.Navigator>
    )
}
