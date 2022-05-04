import React, {useState} from "react"
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, Button, FlatList, TouchableOpacity, Modal } from "react-native"
import {GlobalStyles} from "../styles/global"
import Card from "../shared/card"
import { MaterialIcons } from '@expo/vector-icons'; 
import ReviewForm from "./reviewForm";


export default function Home({navigation}) {

    const [modalOpen, setModalOpen] = useState(false)
   
    const [reviews, setReviews] = useState(new Array(
        {title:"Zelda, Breath of Fresh Air", rating:5, body:"lorem ipsum", key:1},
        {title:"Gotta Catch them all (again)", rating:4, body:"lorem ipsum", key:2},
        {title:"Not So, 'Final' Fantasy", rating:3, body:"lorem ipsum", key:3},
    ))

    const addReview = (review) => {

        review.key = Math.random().toString()

        // let oldReviews = [...reviews]

        // setReviews([...oldReviews, review])

        setReviews(currentReviews => {
            return [review, ...currentReviews]
        })

        setModalOpen(false)

    }

    return (
        <View style={GlobalStyles.container}>
            {/* <Button title="Go to Review Details" onPress={pressHandler}/> */}
            {console.log(reviews)}
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                        name="close"
                        size={24}
                        style={{...styles.modalToggle, ...styles.modalClose}}
                        onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            

            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            
            <FlatList
             data={reviews}
             renderItem={({item}) => (
                 <TouchableOpacity onPress={() => navigation.push("ReviewDetails", item)}>
                     <Card>
                        <Text style={GlobalStyles.titleText}>{item.title}</Text>
                     </Card>
                 </TouchableOpacity>
             )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle : {
            marginBottom : 10,
            borderWidth : 1,
            borderColor : "#f2f2f2",
            padding : 10,
            borderRadius : 10,
            alignSelf : "center"
    
    },

    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },

    modalContent : {
        flex: 1,
        padding:10
    }
})

