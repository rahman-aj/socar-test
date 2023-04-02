import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import firestore, { getDocs, collection } from 'firebase/firestore'
import { FIREBASE_DB } from '../../../firebaseConfig'
import { useSelector, useDispatch } from 'react-redux'
import { setReservationList } from '../../../redux/actions'

export default function CompletedBookingScreen({ navigation }) {

    const onPress = (item) => {
        // Should show the details of the booking
    }

    const reservations = useSelector(state => state.reservationssReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        // Disable temporarily duo to limited quota 

        // const doc = getDocs(collection(FIREBASE_DB, 'completed_reservations'))
        //     .then((snapshot) => {
        //         const reservations = [];

        //         snapshot.docs.forEach(documentSnapshot => {
        //             reservations.push({
        //                 ...documentSnapshot.data(),
        //                 id: documentSnapshot.id,
        //             })
        //         })

        //         dispatch(setReservationList(reservations))
        //     })
    })

    const reservationsList = reservations

    return (
        <View style={styles.container}>
            <FlatList
                // Should use reservationsList instead of data
                data={data = [
                    {
                        'model': 'Proton',
                        'name': 'Iriz',
                        'plate_number': 'VHC 2090',
                        'image_url': 'https://www.proton.com/assets/ps2022/iriz/img/iriz-active.png',
                        'location': 'Suria KLCC',
                        'start_datetime': 'Thu 10/11, 1:10PM',
                        'end_datetime': '2:11PM'
                    },
                    {
                        'model': 'Proton',
                        'name': 'Iriz',
                        'plate_number': 'VHC 2090',
                        'image_url': 'https://www.proton.com/assets/ps2022/iriz/img/iriz-active.png',
                        'location': 'Suria KLCC',
                        'start_datetime': 'Thu 10/11, 1:10PM',
                        'end_datetime': '2:11PM'
                    },
                ]}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => onPress(item)}>
                        <View style={styles.itemContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={styles.itemImage}
                                    source={{
                                        url: item.image_url,
                                    }}
                                />
                                <Text style={styles.itemsubTitle}>{item.plate_number}</Text>
                            </View>
                            <View style={styles.itemTitleContainer}>
                                <Text style={styles.itemTitle}>{item.model}</Text>
                                <Text style={styles.itemTitle}>{item.name}</Text>
                            </View>
                            <View style={styles.itemBottomContainer}>
                                <Text>{item.location}</Text>
                                <Text>{item.start_datetime} - {item.end_datetime}</Text>
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
        color: '#FFFFFF',
        fontSize: 12,
        backgroundColor: '#000000',
    },
    itemImage: {
        width: 36,
        height: 36,
        borderRadius: 8,
        marginRight: 4,
    },
    itemBottomContainer: {
        flexDirection: 'column',
    },
})