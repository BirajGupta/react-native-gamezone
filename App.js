import Home from './screens/home';
import * as Font from "expo-font"
import {Text} from "react-native"
import React, {useState, useEffect} from "react";
import Navigator from "./routes/homeStack"
const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require("./assets/fonts/Nunito-Regular.ttf"),
    'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
      const gettingFonts = async () => {
        await getFonts()
        setFontsLoaded(true)
      }

      gettingFonts()
  },[]) 

  if(fontsLoaded){
    return (
      <Navigator/>
    );
  } 
  else {
    return  (
    <Text>Loading</Text>
    )
  }
  
}

