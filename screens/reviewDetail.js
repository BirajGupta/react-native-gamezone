import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import Card from "../shared/card"
import {GlobalStyles ,images} from "../styles/global"

export default function ReviewDetails({ route }) {
    return (
        <View style={GlobalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <View style={styles.rating}>
                    <Text>Gamezone rating : </Text>
                    <Image source={images.rating[route.params.rating]}/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating : {
        flexDirection : "row",
        justifyContent : "center",
        paddingTop : 16,
        marginTop : 16,
        borderTopWidth : 1,
        borderTopColor : "#eee"
    }
})