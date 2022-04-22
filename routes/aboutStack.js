import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import About from "../screens/about"

const AboutStack = createStackNavigator()

export default () => (
    <NavigationContainer>
        <AboutStack.Navigator>
            <AboutStack.Screen name="About" component={About} />
        </AboutStack.Navigator>
    </NavigationContainer>
)