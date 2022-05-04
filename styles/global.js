import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    container : {
        flex:1,
        padding:24
    },

    titleText: {
        fontFamily:"nunito-bold",
        fontSize:18,
        color:"#333"
    },

    paragraph : {
        marginVertical:8,
        lineHeight : 20
    },

    headerStyles:{
        backgroundColor:"#abcdef",
    },

    headerTitleContainer:{
        flexDirection:"row",
    },

    headerTitleText:{
        fontWeight:"700",
        fontSize:20,
        paddingLeft:5
    },

    headerTitleImage:{
        width:26,
        height:26
    },

    hamIcon : {
        marginLeft:18
    },

    input:{
        borderWidth : 1,
        borderColor : "#ddd",
        padding : 10,
        fontSize : 18,
        borderRadius : 6
    },

    errorText: {
        color : "crimson",
        fontWeight : "bold",
        marginBottom : 10,
        marginTop : 6,
        textAlign : "center"
    }
})

export const images = {
    rating : {
        "1" : require("../assets/rating-1.png"),
        "2" : require("../assets/rating-2.png"),
        "3" : require("../assets/rating-3.png"),
        "4" : require("../assets/rating-4.png"),
        "5" : require("../assets/rating-5.png")
    }
}