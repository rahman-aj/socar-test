import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { useRoute } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CarDetailsScreen({ navigation }) {
    const route = useRoute()
    const item = route.params.item

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View>
            <Image
                style={styles.itemImage}
                source={{
                    url: item.image_url,
                }}
            />
            <View style={styles.itemBottomContainer}>
                <View style={styles.itemBottomLeftDetails}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ paddingRight: 4, fontWeight: 'bold' }}>{item.model}</Text>
                        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 4 }}>
                        <Ionicons name='car' size={16} color='blue' />
                        <Text style={{ paddingRight: 4 }}>{item.fuel_percentage}%</Text>
                        <Ionicons name='location' size={16} color='blue' />
                        <Text>{item.distance}km</Text>
                    </View>
                </View>
                <View style={styles.itemBottomRightDetails}>
                    <Text style={{ textAlign: 'right' }}>RM{item.hourly_rental_price}</Text>
                    <Text style={{ paddingTop: 4 }}>For 1 hour, 0 minutes</Text>
                </View>
            </View>
            {/* Should create a date and time picker for start time and end time of reservation */}
        </View>
    )
}


const styles = StyleSheet.create({
    itemImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        backgroundColor: '#D3D3D3'
    },
    itemBottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        padding: 16
    },
    itemBottomLeftDetails: {
        flexDirection: 'column',
        padding: 8
    },
    itemBottomRightDetails: {
        flexDirection: 'column',
        padding: 8
    }
})