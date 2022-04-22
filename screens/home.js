import React, {useState} from "react"
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from "react-native"
import {GlobalStyles} from "../styles/global"


export default function Home({navigation}) {
   
    const [reviews, setReviews] = useState([
        {title:"Zelda, Breath of Fresh Air", rating:5, body:"lorem ipsum", key:1},
        {title:"Gotta Catch them all (again)", rating:4, body:"lorem ipsum", key:2},
        {title:"Not So, 'Final' Fantasy", rating:3, body:"lorem ipsum", key:3},
    ])

    return (
        <View style={GlobalStyles.container}>
            {/* <Button title="Go to Review Details" onPress={pressHandler}/> */}
            <FlatList
             data={reviews}
             renderItem={({item}) => (
                 <TouchableOpacity onPress={() => navigation.push("ReviewDetails", item)}>
                     <Text style={GlobalStyles.titleText}>{item.title}</Text>
                 </TouchableOpacity>
             )}
            />
        </View>
    )
}

