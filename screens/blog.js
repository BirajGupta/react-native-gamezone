import React, {useState} from "react"
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from "react-native"
import {GlobalStyles} from "../styles/global"

export default function Blog({navigation}){
    return (
        <View>
        <Text>Blog Page</Text>
        <Button title="GO to home" onPress={() => navigation.navigate("Home", {
            screen : "Home",
            params : {name : "Home Page"}
        }) }/>
        </View>
    )
}