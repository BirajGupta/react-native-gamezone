import React from "react"
import { StyleSheet, View, Text } from "react-native"
import {GlobalStyles} from "../styles/global"

export default function Card({children}) {
  return (
    <View style={styles.card}>
        <View style={styles.cardContent}>
            {children}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card : {
        borderRadius : 6,
        elevation : 3,
        backgroundColor : "#fff",
        shadowColor : "#333",
        shadowOpacity : 0.3,
        shadowRadius : 2,
        marginHorizontal : 4,
        marginVertical : 4,
        textShadowOffset:{width:1, height:1},
    },

    cardContent : {
        marginHorizontal:18,
        marginVertical : 10
    }
})