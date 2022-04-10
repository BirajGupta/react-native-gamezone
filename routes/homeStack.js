import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Home from "../screens/home"
import ReviewDetails from "../screens/reviewDetail"

const screens = {
    Home : {
        screen : Home
    },
    ReviewDetails : {
        screen : ReviewDetails
    },

}

//register different screens for stack navigator 
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)