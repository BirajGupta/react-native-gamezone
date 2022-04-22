import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default function ReviewDetails({ route }) {
    return (
        <View style={styles.container}>
            <Text>{route.params.title}</Text>
            <Text>{route.params.body}</Text>
            <Text>{route.params.rating}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding:24
    }
})