import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import firestore, { getDocs, collection } from 'firebase/firestore'
import { FIREBASE_DB } from '../../firebaseConfig'
import { useSelector, useDispatch } from 'react-redux'
import { setCars } from '../../redux/actions'

export default function HomeScreen({ navigation }) {

    const cars = useSelector(state => state.carsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        const doc = getDocs(collection(FIREBASE_DB, 'cars'))
            .then((snapshot) => {
                const cars = [];

                snapshot.docs.forEach(documentSnapshot => {
                    cars.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id,
                    })
                })

                dispatch(setCars(cars))
            })
    })

    const carList = cars

    return (
        <View style={styles.container}>
            <FlatList
                data={carList}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})