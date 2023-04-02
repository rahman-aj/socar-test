import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from "@react-navigation/native"

export default function CarDetailsScreen({ navigation }) {
    const route = useRoute()

    return (
        <View>
            <Text>Car Details Page!</Text>
            <Text>{route.params.item.name}</Text>
        </View>
    )
}
