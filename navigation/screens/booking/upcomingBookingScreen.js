import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button } from 'react-native'
import firestore, { getDocs, collection } from 'firebase/firestore'
import { FIREBASE_DB } from '../../../firebaseConfig'
import { useSelector, useDispatch } from 'react-redux'
import { setReservationList } from '../../../redux/actions'

export default function UpcomingBookingScreen({ navigation }) {

    const onPress = (item) => {
        // Should show the details of the booking
    }

    const navigateToBooking = () => {
        // navigate to car reservation
    }

    const showEmptyView = () => {
        return (
            <View style={styles.emptyViewContainer}>
                <Text style={{ textAlign: 'center' }}>No Upcoming Booking</Text>
                <Button onPress={navigateToBooking} title='Book a Car' />
            </View>
        )
    }

    const reservations = useSelector(state => state.reservationssReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        // Disable temporarily duo to limited quota 

        // const doc = getDocs(collection(FIREBASE_DB, 'upcoming_reservations'))
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
                data={data = []}
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
                ListEmptyComponent={showEmptyView()}
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
    emptyViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 200,
    }
})