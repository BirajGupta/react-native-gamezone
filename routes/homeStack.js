import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Home from "../screens/home"
import ReviewDetails from "../screens/reviewDetail"

const screens = {
    //if not title in navigation options is given, bydefault tile is screen name
    Home : {
        screen : Home,
        navigationOptions : {
            title : "GameZone",
            // headerStyle : {
            //     backgroundColor: "#0003"
            // }
        }
    },
    ReviewDetails : {
        screen : ReviewDetails,
        navigationOptions : {
            title : "Review Details",
        }
    },

}

//register different screens for stack navigator 
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions : {
        headerStyle : {
            backgroundColor: "#0003",
            height: 100
        }
    }
})

export default createAppContainer(HomeStack)