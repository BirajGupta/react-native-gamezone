import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import {GlobalStyles} from "../styles/global"


export default function Home({navigation}) {
    //navigation.goBack() for popping screen
    // const pressHandler = () => {
    //     navigation.push('ReviewDetails')
    // }

    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.titleText}>Home</Text>
            {/* <Button title="Go to Review Details" onPress={pressHandler}/> */}
        </View>
    )
}

