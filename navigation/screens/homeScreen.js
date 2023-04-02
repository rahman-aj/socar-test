import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import firestore, { getDocs, collection } from 'firebase/firestore'
import { FIREBASE_DB } from '../../firebaseConfig'
import { useSelector, useDispatch } from 'react-redux'
import { setCars } from '../../redux/actions'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {

    const onPress = (item) => {
        navigation.navigate('CarDetails', { item: item })
    }

    const cars = useSelector(state => state.carsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        // Disable temporarily duo to limited quota 

        // const doc = getDocs(collection(FIREBASE_DB, 'cars'))
        //     .then((snapshot) => {
        //         const cars = [];

        //         snapshot.docs.forEach(documentSnapshot => {
        //             cars.push({
        //                 ...documentSnapshot.data(),
        //                 id: documentSnapshot.id,
        //             })
        //         })

        //         dispatch(setCars(cars))
        //     })
    })

    const carList = cars

    return (
        <View style={styles.container}>
            <FlatList
                data={data = [
                    {
                        'model': 'Proton',
                        'name': 'Iriz',
                        'plate_number': 'VHC 2090',
                        'image_url': 'https://www.proton.com/assets/ps2022/iriz/img/iriz-active.png',
                        'location': 'Suria KLCC',
                        'fuel_percentage': 53,
                        'distance': 1.5,
                        'hourly_rental_price': 12.90
                    },
                    {
                        'model': 'Proton',
                        'name': 'Iriz',
                        'plate_number': 'VHC 2090',
                        'image_url': 'https://www.proton.com/assets/ps2022/iriz/img/iriz-active.png',
                        'location': 'Suria KLCC',
                        'fuel_percentage': 53,
                        'distance': 1.5,
                        'hourly_rental_price': 12.90
                    },
                    {
                        'model': 'Proton',
                        'name': 'Iriz',
                        'plate_number': 'VHC 2090',
                        'image_url': 'https://www.proton.com/assets/ps2022/iriz/img/iriz-active.png',
                        'location': 'Suria KLCC',
                        'fuel_percentage': 53,
                        'distance': 1.5,
                        'hourly_rental_price': 12.90
                    },
                    {
                        'model': 'Proton',
                        'name': 'Iriz',
                        'plate_number': 'VHC 2090',
                        'image_url': 'https://www.proton.com/assets/ps2022/iriz/img/iriz-active.png',
                        'location': 'Suria KLCC',
                        'fuel_percentage': 53,
                        'distance': 1.5,
                        'hourly_rental_price': 12.90
                    },
                    {
                        'model': 'Proton',
                        'name': 'Iriz',
                        'plate_number': 'VHC 2090',
                        'image_url': 'https://www.proton.com/assets/ps2022/iriz/img/iriz-active.png',
                        'location': 'Suria KLCC',
                        'fuel_percentage': 53,
                        'distance': 1.5,
                        'hourly_rental_price': 12.90
                    },
                ]}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => onPress(item)}>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemTitleContainer}>
                                <Text style={styles.itemTitle}>{item.model}</Text>
                                <Text style={styles.itemTitle}>{item.name}</Text>
                                <Text style={styles.itemsubTitle}>{item.plate_number}</Text>
                            </View>
                            <Image
                                style={styles.itemImage}
                                source={{
                                    url: item.image_url,
                                }}
                            />
                            <View style={styles.itemBottomContainer}>
                                <View style={styles.itemBottomLeftDetails}>
                                    <Text>{item.location}</Text>
                                    <View style={{ flexDirection: 'row', paddingTop: 4 }}>
                                        <Ionicons name='car' size={16} color='blue' />
                                        <Text style={{ paddingRight: 4 }}>{item.fuel_percentage}%</Text>
                                        <Ionicons name='location' size={16} color='blue' />
                                        <Text>{item.distance}</Text>
                                    </View>
                                </View>
                                <View style={styles.itemBottomRightDetails}>
                                    <Text>RM{item.hourly_rental_price}</Text>
                                    <Text style={{ paddingTop: 4 }}>For 1 hour, 0 minutes</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        margin: 16,
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    itemTitleContainer: {
        flexDirection: 'row'
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 2,
        paddingBottom: 16,
    },
    itemsubTitle: {
        fontSize: 12,
        opacity: 0.6,
        padding: 2,
        paddingTop: 6,
    },
    itemImage: {
        width: '100%',
        height: 140,
        borderRadius: 8,
        backgroundColor: '#D3D3D3'
    },
    itemBottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
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