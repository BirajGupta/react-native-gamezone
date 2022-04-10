import React, {useState} from "react"
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from "react-native"
import {GlobalStyles} from "../styles/global"


export default function Home({navigation}) {
    //navigation.goBack() for popping screen
    // const pressHandler = () => {
    //     navigation.push('ReviewDetails')
    // }
    const [reviews, setReviews] = useState([
        {title:"Zelda, Breath of Fresh Air", rating:5, body:"lorem ipsum", key:1},
        {title:"Gotta Catch them all (again)", rating:4, body:"lorem ipsum", key:2},
        {title:"Not So, 'Final' Fantasy", rating:3, body:"lorem ipsum", key:3},
    ])

    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.titleText}>Home</Text>
            {/* <Button title="Go to Review Details" onPress={pressHandler}/> */}
        </View>
    )
}

