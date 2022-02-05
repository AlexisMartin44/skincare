import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import { Platform } from "react-native";

import HomePage from "../screens/home/HomePage";
import Colors from "../constants/Colors";

const Navigator = createStackNavigator({
    Home: HomePage,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.white : ""
        },
        headerTintColor: Platform.OS === 'android' ? Colors.darkBlue : Colors.primary
    }
});

export default createAppContainer(Navigator);