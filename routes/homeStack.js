import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GlobalStyles } from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons'; 
import Blog from "../screens/blog"
import Home from "../screens/home"
import ReviewDetails from "../screens/reviewDetail"
import Profile from "../screens/profile";

const HomeStack = createStackNavigator()
const BlogStack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator
    //screenOptions for global styles to a navigator header for all screens in it
    screenOptions={{
        headerStyle: GlobalStyles.headerStyles,
        headerLeft : props => <MaterialIcons name="menu" size={28} style={GlobalStyles.hamIcon} onPress={() => navigation.toggleDrawer()}/>
    }}
    >
        <HomeStack.Screen name="Home" component={Home}/>
        <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
    </HomeStack.Navigator>
)

const BlogStackScreen = ({navigation}) => (
    <BlogStack.Navigator
    screenOptions={{
        headerStyle: GlobalStyles.headerStyles,
        headerLeft : props => <MaterialIcons name="menu" size={28} style={GlobalStyles.hamIcon} onPress={() => navigation.toggleDrawer()}/>
    }}
    >
        <BlogStack.Screen name="Blog" component={Blog}/>
    </BlogStack.Navigator>
)

const ProfileStack = createStackNavigator()

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile}/>
    </ProfileStack.Navigator>
)

const TabsScreen = () => (
    <Tabs.Navigator> 
        <Tabs.Screen name="Home" component={HomeStackScreen} options={{headerShown : false}}/>
        <Tabs.Screen name="Blog" component={BlogStackScreen} options={{headerShown : false}}/>
    </Tabs.Navigator>
)

const Drawer = createDrawerNavigator()


export default () => ( 

    <NavigationContainer>
        {/* <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home}/>
            <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} options={{title:"Review Details"}}/>
        </HomeStack.Navigator> */}

        {/* <Tabs.Navigator> 
            <Tabs.Screen name="Home Page" component={HomeStackScreen}/>
            <Tabs.Screen name="ReviewDetails" component={BlogStackScreen} options={{title:"Blog Page"}}/>
        </Tabs.Navigator> */}

        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsScreen} options={{headerShown:false}} />
            <Drawer.Screen name="Profile" component={ProfileStackScreen} options={{headerShown:false}}/>
        </Drawer.Navigator>
    </NavigationContainer>

)
