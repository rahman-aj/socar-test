import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { useRoute } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from 'react-native-modal-datetime-picker'
import Moment from 'moment'
import firestore, { addDoc, collection } from 'firebase/firestore'
import { FIREBASE_DB } from '../../firebaseConfig'

export default function CarDetailsScreen({ navigation }) {
    const route = useRoute()
    const item = route.params.item

    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false)
    const [isStartDate, setIsStartDate] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const showStartDateTimePicker = () => {
        setIsStartDate(true)
        setIsDateTimePickerVisible(true)
    }

    const hideDateTimePicker = () => {
        setIsStartDate(false)
        setIsDateTimePickerVisible(false)
    }

    const showEndDateTimePicker = () => {
        setIsStartDate(false)
        setIsDateTimePickerVisible(true)
    }

    const handleDatePicked = (date) => {
        const formattedDate = Moment(date).calendar()
        isStartDate ? setStartDate(formattedDate) : setEndDate(formattedDate)
        hideDateTimePicker()
    }

    const handleBooking = () => {
        addCarBooking()
        navigation.navigate('Booking', { screen: 'UpComing' })
    }

    const addCarBooking = async () => {
        addDoc(collection(FIREBASE_DB, 'upcoming_reservations'), {
            distance: item.distance,
            fuel_percentage: item.fuel_percentage,
            hourly_rental_price: item.hourly_rental_price,
            id: 2,
            image_url: item.image_url,
            location: item.location,
            model: item.model,
            name: item.name,
            plate_number: item.plate_number,
            start_date: startDate,
            end_date: endDate
        })
    }

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

            <View style={styles.titleContainer}>
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={showStartDateTimePicker}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            Booking starts at:
                        </Text>
                        <Text style={styles.dateTime}>
                            {startDate}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={showEndDateTimePicker}>
                    <Text style={styles.title}>
                        Booking ends at:
                    </Text>
                    <Text style={styles.dateTime}>
                        {endDate}
                    </Text>
                </TouchableOpacity>
            </View>
            <DateTimePicker
                isVisible={isDateTimePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
                mode={'datetime'}
            />
            <Button onPress={handleBooking} title='Book Now!' />
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
    },
    itemContainer: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 8,
        marginTop: 8,
        borderRadius: 8,
    },
    titleContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 12,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
        color: '#808080',
    },
    dateTime: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000000',
    },
    textContainer: {
        marginRight: 30,
    },
})