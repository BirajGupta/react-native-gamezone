import React from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Image } from "react-native"
import {GlobalStyles} from "../styles/global"

export default function Header({title, image}) {
  return (
      <View style={GlobalStyles.headerTitleContainer}>
        {image ? <Image style={GlobalStyles.headerTitleImage} source={image}/>:null}
        <Text style={GlobalStyles.headerTitleText}>{title}</Text>
      </View>
  )
}


