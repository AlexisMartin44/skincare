import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from './AuthNavigator';
import Tabs from "./Tabs";

const Main = createStackNavigator();

const MainNavigator = () => {
    return(
        <Main.Navigator
            initialRouteName="Login"
            screenOptions={{
                animationEnabled: false,
                headerShown:false
            }}
        >
            <Main.Screen name="AuthNavigator" component={AuthNavigator}/>
            <Main.Screen name="Tabs" component={Tabs}/>
        </Main.Navigator>
    );
}

export default MainNavigator;