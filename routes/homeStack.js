import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GlobalStyles } from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons'; 
import Home from "../screens/home"
import ReviewDetails from "../screens/reviewDetail"
import About from "../screens/about"

const HomeStack = createStackNavigator()
const AboutStack = createStackNavigator()

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator
    //screenOptions for global styles to a navigator header for all screens in it
    >
        <HomeStack.Screen name="Home" component={Home} options={{
        headerStyle: GlobalStyles.headerStyles,
        headerLeft : props => <MaterialIcons name="menu" size={28} style={GlobalStyles.hamIcon} onPress={() => navigation.toggleDrawer()}/>
    }}/>
        <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} options={{title: "Review Details"}}/>
    </HomeStack.Navigator>
)

const AboutStackScreen = ({navigation}) => (
    <AboutStack.Navigator
    screenOptions={{
        headerStyle: GlobalStyles.headerStyles,
        headerLeft : props => <MaterialIcons name="menu" size={28} style={GlobalStyles.hamIcon} onPress={() => navigation.toggleDrawer()}/>
    }}
    >
        <AboutStack.Screen name="About" component={About}/>
    </AboutStack.Navigator>
)

const Drawer = createDrawerNavigator()

export default () => ( 

    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStackScreen} options={{headerShown:false}} />
            <Drawer.Screen name="About" component={AboutStackScreen} options={{headerShown:false}}/>
        </Drawer.Navigator>
    </NavigationContainer>

)
